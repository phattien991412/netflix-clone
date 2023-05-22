import useBillBoard from "@/hooks/useBillBoard";
import React, { useCallback, useState } from "react";
import PlayButton from "../Button/PlayButton";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Modal from "../Modal";
import Loading from "../Loading/loading";

const BillBoard = () => {
  const { data } = useBillBoard();
  const [loading, setLoading] = useState(false)

  const [movieInfo, setMovieInfo] = useState({})

  return (
    <div className="relative h-screen">
      {
        loading && <Loading/>
      }
      {
        movieInfo?.id && <Modal movieInfo={movieInfo} setMovieInfo={setMovieInfo} setLoading={setLoading} />
      }
      <video
        poster={data?.thumbnailUrl}
        className="w-full h-screen object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-base md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={() => setMovieInfo(data)}
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <AiOutlineInfoCircle className="w-4 text-xl md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
