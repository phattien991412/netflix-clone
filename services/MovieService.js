import { KEY } from "@/util";
import useBaseService from "./baseService";

const useMovieService = () => {
    const { get } = useBaseService();
    const listMovie = () => {
        return get(`InTheaters/${KEY}`)
    }

    const getTrailerById = (id) => {
      return get(`Trailer/${KEY}/${id}`)
    }

    const getPopularMovies = () => {
      return get(`MostPopularMovies/${KEY}`)
    }

    const getPopularTVs = () => {
      return get(`MostPopularTVs/${KEY}`)
    }

    const getComingSoon = () => {
      return get(`ComingSoon/${KEY}`)
    }

    const searchMovie = (movieName) => {
      return get(`SearchMovie/${KEY}/${movieName}`)
    }

    const getPoster = (id) => {
      return get(`Posters/${KEY}/${id}`)
    }

    const getFullCast = (id) => {
      return get(`FullCast/${KEY}/${id}`)
    }

    const getUsersRating = (id) => {
      return get(`UserRatings/${KEY}/${id}`)
    }

  return {
    listMovie,
    getTrailerById,
    getPopularMovies,
    getPopularTVs,
    getComingSoon,
    searchMovie,
    getPoster,
    getFullCast,
    getUsersRating
  }
}

export default useMovieService;