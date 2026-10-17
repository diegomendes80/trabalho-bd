import type { Media } from "../types/media";
const API_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const LANGUAGE = "language=pt-BR";

 const TV_GENRES: Record<number, string> = {
  10759: "Ação e Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  10762: "Infantil",
  9648: "Mistério",
  10763: "Notícias",
  10764: "Reality",
  10765: "Ficção Científica e Fantasia",
  10766: "Novela",
  10767: "Talk Show",
  10768: "Guerra e Política",
  37: "Faroeste",
};


export const getTvShowDetails = async (id: string) => {
  try {
    const response = await fetch(
      `${API_URL}/tv/${id}?api_key=${API_KEY}&${LANGUAGE}`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularTvShows = async (): Promise<Media[]> => {
  try {
    const response = await fetch(
      `${API_URL}/trending/tv/week?api_key=${API_KEY}&${LANGUAGE}`,
    );

    const data = await response.json();

    let rawData = [];
    for (const m of data.results) {
      if (rawData.length > 4) break;
      if (m.overview) rawData.push(m);
    }

    const tvShows = await Promise.all(
      rawData.map(async (m: any) => {
        const details = await getTvShowDetails(m.id);
        const creator = details.created_by?.[0];

        return {
          name: details.name,
          type: "series",
          sinopse: details.overview?.trim() || "Sinopse não disponível",
          genders: details.genres?.map((g: any) => g.name) || [],
          srcBanner: `${IMG_URL}/w1280${details.backdrop_path}`,
          srcBannerMobile: `${IMG_URL}/w500${details.poster_path}`,
          director: creator?.name || "Diretor não disponível",
          releaseYear: m.first_air_date
            ? new Date(m.first_air_date).getFullYear()
            : 0,
          qtdEpisodes: details.number_of_episodes,
          qtdSeasons: details.number_of_seasons,
          saved: false,
        } as Media;
      }),
    );

    return tvShows;
  } catch (error) {
    console.log(error);
    return [];
  }
};
