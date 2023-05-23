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
        <div className="overflow-hidden lg:overflow-visible">
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              280: {
                slidesPerView: 2
              },
              420: {
                slidesPerView: 2
              },
              576: {
                slidesPerView: 2
              },
              640: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4
              }
            }}
          >
            {data.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieItem data={movie} setLoading={setLoading} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
