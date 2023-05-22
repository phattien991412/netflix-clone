import React from "react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import useMovieId from "@/hooks/useMovieId";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovieId(movieId);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black/70">
        <BsArrowLeft
          onClick={() => router.push("/")}
          className="text-5xl text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        muted
        controls
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
