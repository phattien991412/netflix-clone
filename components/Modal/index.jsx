import React, { useEffect, useRef } from "react";
import styles from "@/styles";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "../Button/PlayButton";
import FavoriteButton from "../Button/FavorButon";

const Modal = ({ movieInfo, setMovieInfo, setLoading }) => {
  const refModal = useRef();
  const refClose = useRef();

  useEffect(() => {
    const body = document.querySelector("body");
    if (movieInfo !== {}) {
      body.style.overflowY = "hidden";
    }
    const handleClickOutside = (event) => {
      if (refModal.current && !refModal.current.contains(event.target) || refClose.current) {
        setMovieInfo({})
        body.style.overflowY = "auto";
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refModal]);

  return (
    <div
      className="fixed z-[99999] top-0 left-0 bg-[#0000005d] w-full h-screen"
    >
      <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div ref={refModal} className={`transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>

          <div className="relative h-96">
            <video poster={movieInfo?.thumbnailUrl} autoPlay muted loop src={movieInfo?.videoUrl} className="w-full brightness-[60%] object-cover h-full" />
            <div ref={refClose} onClick={() => setMovieInfo({})} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
              <AiOutlineClose className="text-white w-6" />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {movieInfo?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={movieInfo?.id} />
                <FavoriteButton movieId={movieInfo?.id} setLoading={setLoading} />
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-8">
              <p className="text-green-400 font-semibold text-lg">
                New
              </p>
              <p className="text-white text-lg">
                {movieInfo?.duration}
              </p>
              <p className="text-white text-lg">
                {movieInfo?.genre}
              </p>
            </div>
            <p className="text-white text-lg">
              {movieInfo?.description}
            </p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;