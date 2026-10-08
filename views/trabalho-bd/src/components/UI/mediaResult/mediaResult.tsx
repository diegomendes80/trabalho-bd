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
  media: Media;
}

export const MediaResult = ({ media }: MediaResultProps) => {
  return (
    <Box component="div" className="mediaResult-root">
      {media.srcBannerMobile && (
        <Box
          component="img"
          src={media.srcBannerMobile}
          alt={media.name}
          className="mediaResult__poster"
        />
      )}

      <Box component="div" className="information">
        <Typography variant="h2" className="information__media-title">
          {media.name}
        </Typography>

        <Box component="div" className="information__details">
          <Typography variant="body1" className="p release_year">
            {media.releaseYear}
          </Typography>
          <Typography variant="body1" className="p minute_duration">
            {media.type == "movies"
              ? `${media.minuteDuration} min`
              : `${media.qtdSeasons} season`}
          </Typography>
          <Typography variant="body1" className="p director">
            {media.director}
          </Typography>
        </Box>

        <Box component="div" className="information__type-rate">
          <Box component="span" className="type">
            {media.type}
          </Box>
          <MediaRate rate={4.5} />
        </Box>
      </Box>
    </Box>
  );
};
