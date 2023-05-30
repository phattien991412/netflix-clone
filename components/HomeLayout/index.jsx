import React, { useEffect, useState } from "react";

import BillBoard from "../BillBoard";
import Loading from "../Loading/loading";
import useMovies from "@/hooks/useMovie";
import MoviesList from "../Movies/MoviesList";
import useFavorites from "@/hooks/useFavorites";

const HomeLayout = () => {
  const [loading, setLoading] = useState(false);

  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();

  useEffect(() => {
    const body = document.querySelector("body");
    if (loading) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [loading]);

  return (
    <>
      <BillBoard />
      <div className="pb-8">
        {loading && <Loading />}
        <MoviesList
          title="Trending Now"
          data={movies}
          setLoading={setLoading}
        />
        <MoviesList title="My List" data={favorites} setLoading={setLoading} />
      </div>
    </>
  );
};

export default HomeLayout;
