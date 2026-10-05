import axios from "axios";
import type { Media } from "../types/media";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p";

const api = axios.create({
  baseURL: API_URL,
  params: { api_key: API_KEY, language: "pt-BR" },
});

export const getRatedMovies = async (): Promise<Media[]> => {
  const { data } = await api.get("/discover/movie", {
    params: {
      sort_by: "vote_average.desc",
      "vote_count.gte": 1000,
      page: 1,
    },
  });

  const topThree = data.results.slice(0, 5);

  return Promise.all(
    topThree.map(async (movie: { id: number }): Promise<Media> => {
      const { data: d } = await api.get(`/movie/${movie.id}`, {
        params: {
          append_to_response: "credits",
        },
      });

       const director = d.credits.crew.find(
        (p: { job: string }) => p.job === "Director"
      );    

      return {
        name: d.title,
        type: "movies",
        sinopse: d.overview,
        genders: d.genres.map((g: { name: string }) => g.name),
        srcBanner: `${IMG_URL}/original${d.backdrop_path}`,
        srcBannerMobile: `${IMG_URL}/w780${d.poster_path}`,
        director: director?.name ?? "—",
        releaseYear: Number(d.release_date.slice(0, 4)),
        minuteDuration: d.runtime,
        saved: false,
      };
    }),
  );
};
