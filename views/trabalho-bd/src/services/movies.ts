import type { Media } from "../types/media";
import { getTvShowDetails } from "./series";

const API_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const LANGUAGE = "language=pt-BR";

export const getMovieDetails = async (id: string) => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${id}?api_key=${API_KEY}&${LANGUAGE}`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMovies = async (): Promise<Media[]> => {
  try {
    const response = await fetch(
      `${API_URL}/trending/movie/week?api_key=${API_KEY}&${LANGUAGE}`,
    );

    const data = await response.json();

    //Fiz essa pequena lógica que impede que um filme seja inserido sem a sua sinopse
    let rawData = [];
    for (const m of data.results) {
      if (rawData.length > 4) break;

      if (m.overview) rawData.push(m);
    }

    const movies = await Promise.all(
      rawData.map(async (m: any) => {
        // detalhes do filme
        const details = await getMovieDetails(m.id);

        // créditos para pegar diretor
        const creditsRes = await fetch(
          `${API_URL}/movie/${m.id}/credits?api_key=${API_KEY}&${LANGUAGE}`,
        );
        const credits = await creditsRes.json();
        const director = credits.crew.find((c: any) => c.job === "Director");

        return {
          name: details.title,
          type: "movies",
          sinopse: details.overview?.trim() || "Sinopse não disponível",
          genders: details.genres?.map((g: any) => g.name) || [],
          srcBanner: `${IMG_URL}/w1280${details.backdrop_path}`,
          srcBannerMobile: `${IMG_URL}/w500${details.poster_path}`,
          director: director?.name || "Diretor não disponível",
          releaseYear: details.release_date
            ? new Date(details.release_date).getFullYear()
            : 0,
          minuteDuration: details.runtime || 0,
          saved: false,
        } as Media;
      }),
    );

    return movies;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovie = async (name: string): Promise<Media[]> => {
  try {
    const response = await fetch(
      `${API_URL}/search/multi?query=${encodeURIComponent(name)}&language=pt-BR&api_key=${API_KEY}`,
    );

    const data = await response.json();

    const medias = await Promise.all(
      data.results
        .filter(
          (m: any) =>
            (m.media_type === "movie" || m.media_type === "tv") &&
            m.poster_path,
        )
        .map(async (m: any) => {
          if (m.media_type == "movie") {
            const details = await getMovieDetails(m.id);
            // créditos para pegar diretor
            const creditsRes = await fetch(
              `${API_URL}/movie/${m.id}/credits?api_key=${API_KEY}&${LANGUAGE}`,
            );
            const credits = await creditsRes.json();
            const director = credits.crew.find(
              (c: any) => c.job === "Director",
            );

            return {
              id: m.id,
              name: m.title,
              type: "movies",
              sinopse: m.overview?.trim() || "Sinopse não disponível",
              genders: [],
              srcBanner: m.backdrop_path
                ? `${IMG_URL}/w1280${m.backdrop_path}`
                : "",
              srcBannerMobile: m.poster_path
                ? `${IMG_URL}/w500${m.poster_path}`
                : "",
              director: director?.name || "Diretor não disponível",
              releaseYear: m.release_date
                ? new Date(m.release_date).getFullYear()
                : 0,
              minuteDuration: details.runtime || 0,
              saved: false,
            } as Media;
          } else {
            const details = await getTvShowDetails(m.id);
            const creator = details.created_by?.[0];

            return {
              id: m.id,
              name: m.name,
              type: "series",
              sinopse: m.overview?.trim() || "Sinopse não disponível",
              genders: [],
              srcBanner: m.backdrop_path
                ? `${IMG_URL}/w1280${m.backdrop_path}`
                : "",
              srcBannerMobile: m.poster_path
                ? `${IMG_URL}/w500${m.poster_path}`
                : "",
              director: creator?.name|| "Diretor não disponível",
              releaseYear: m.first_air_date
                ? new Date(m.first_air_date).getFullYear()
                : 0,
              qtdEpisodes: details.number_of_episodes || 0,
              qtdSeasons: details.number_of_seasons || 0,
              saved: false,
            } as Media;
          }
        }),
    );

    return medias;
  } catch (error) {
    console.log(error);
    return [];
  }
};
