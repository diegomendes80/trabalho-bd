import "./mediaResult.scss";
import { Box, Typography } from "@mui/material";
import type { Movie, Serie, Media } from "../../../types/media";
import { MediaRate } from "../mediaRate/mediaRate";

   
const randomMovie: Movie = {
  name: "Eco do Amanhã",
  type: "movies",
  sinopse:
    "Uma engenheira de som descobre uma gravação misteriosa que antecipa acontecimentos da cidade e precisa decidir se revela o que ouviu.",
  genders: ["Suspense", "Ficção Científica"],
  srcBanner: "https://picsum.photos/seed/eco/1920/1080",
  srcBannerMobile: "https://picsum.photos/seed/eco/800/1200",
  director: "Luísa Carvalho",
  releaseYear: 2022,
  minuteDuration: 112,
  saved: false,
};

const randomSerie: Serie = {
  name: "Ilha dos Ventos",
  type: "series",
  sinopse:
    "Moradores de uma ilha isolada começam a notar que as tempestades seguem um padrão ligado a um segredo guardado há décadas.",
  genders: ["Drama", "Mistério"],
  srcBanner: "https://picsum.photos/seed/ilha/1920/1080",
  srcBannerMobile: "https://picsum.photos/seed/ilha/800/1200",
  director: "Bruno Matos",
  releaseYear: 2024,
  qtdEpisodes: 16,
  qtdSeasons: 2,
  saved: false,
};


const medias: Media[] = [randomMovie, randomSerie]; 


interface MediaResultProps {
  media:Media;
}

export const MediaResult = () => {

  return (
    <Box component="div" className="mediaResult-root">
      <Box
        component="img"
        src={medias[1].srcBannerMobile}
        alt={medias[1].name}
        className="mediaResult__poster"
      ></Box>

      <Box component="div" className="information">
        <Typography variant="h2" className="information__media-title">
          {medias[1].name}
        </Typography>

        <Box component="div" className="information__details">
          <Typography variant="body1" className="p release_year">
            {medias[1].releaseYear}
          </Typography>
          <Typography variant="body1" className="p minute_duration">
            {medias[1].type == "movies" ? `${medias[1].minuteDuration} min` : `${medias[1].qtdSeasons} season`}
          </Typography>
          <Typography variant="body1" className="p director">
            {medias[1].director}
          </Typography>
        </Box>

        <Box component="div" className="information__type-rate">
            <Box component="span" className="type">{medias[1].type}</Box>
            <MediaRate rate={4.5}/>

        </Box>
      </Box>
    </Box>
  );
};
