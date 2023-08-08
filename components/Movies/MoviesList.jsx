import React from "react";
import MovieItem from "./MovieItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const MoviesList = ({ data, title, setLoading }) => {
  return (
    <div className="px-4 md:px-12 my-16 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          {data.map((movie) => (
              <MovieItem data={movie} setLoading={setLoading} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
