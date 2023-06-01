import React, { useMemo, useState } from "react";

import axios from "axios";

import { NotificationToast } from "@/modules/Notification";
import { FaEdit } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Loading from "../Loading/loading";

const CardUser = ({ name, mutateUser, selectProfile }) => {
  const images = useMemo(() => [
    "/images/default-blue.png",
    "/images/default-red.png",
    "/images/default-slate.png",
    "/images/default-green.png"
  ], []);
  const imgSrc = useMemo(() => images[Math.floor(Math.random() * 4)], [images]);

  const [update, setUpdate] = useState("");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    if(!update || update === name) return;
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("api/updateUser", { data: update });
      if (res.status === 200) {
        mutateUser();
        setEdit(false);
        NotificationToast.fire({
          toast: true,
          position: "top-right",
          icon: "success",
          title: `Update success`
        });
        setLoading(false);
      }
    } catch (err) {
      NotificationToast.fire({
        toast: true,
        position: "top-right",
        icon: "error",
        title: `${err.response.data.error}`
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex-row w-44 mx-auto">
      {
        loading && <Loading/>
      }
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent hover:cursor-pointer hover:border-white overflow-hidden">
        <Image
          onClick={selectProfile}
          className="w-max h-max object-contain"
          src={imgSrc}
          alt="avatar"
          width={200}
          height={200}
        />
      </div>
      <form
        onSubmit={edit && handleUpdate}
        className="flex justify-center items-center gap-4 mt-4 text-gray-400 text-2xl"
      >
        {!edit ? (
          <p className="hover:text-white">{name}</p>
        ) : (
          <input
            type="text"
            placeholder={name}
            onChange={(e) => setUpdate(e.target.value)}
            className="outline-none w-full rounded-lg py-1 pl-3 text-base"
          />
        )}
        <div className="flex items-center">
          <p
            className="cursor-pointer"
            onClick={() => setEdit((prev) => !prev)}
          >
            {!edit ? (
              <FaEdit className="hover:text-sky-500 transition duration-300" />
            ) : (
              <AiOutlineClose className="hover:text-red-500 transition duration-300" />
            )}
          </p>
          {edit && (
            <p onClick={handleUpdate} className="cursor-pointer">
              <AiOutlineCheck className="hover:text-green-500 transition duration-300" />
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CardUser;
