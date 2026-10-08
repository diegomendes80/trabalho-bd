import "./cardMedia.scss";
import { Box, Typography } from "@mui/material";
import { MediaRate } from "../mediaRate/mediaRate";
import type { Media } from "../../../types/media";

interface CardMediaProps {
  media?: Media;
}

const medias: Media[] = [
  {
    name: "Interestelar",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner:
      "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
    srcBannerMobile:
      "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: false,
  },
  {
    name: "Breaking Bad",
    type: "series",
    sinopse:
      "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina para garantir o futuro financeiro da família.",
    genders: ["Crime", "Drama", "Suspense"],
    srcBanner:
      "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
    srcBannerMobile:
      "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
    director: "Vince Gilligan",
    releaseYear: 2008,
    qtdEpisodes: 62,
    qtdSeasons: 5,
    saved: false,
  },
];

export const CardMedia = ({ media }: CardMediaProps) => {
  return (
    <Box component="div" className="card-media-root">
      <Box component="img" src={medias[0].srcBannerMobile} className="card-media__bg"/>

      <Box component="span" className="card-media__type">
        {medias[0].type == "movies" ? "Filme" : "Serie"}
      </Box>

      <Box component="div" className="card-media__info">
        <Typography variant="h3" className="info__title">
          {medias[0].name}
        </Typography>

        <Box component="div" className="info__details">
          <Typography variant="body1" className="p release_year">
            {medias[0].releaseYear}
          </Typography>
          <Typography variant="body1" className="p minute_duration">
            {medias[0].type == "movies"
              ? `${medias[0].minuteDuration} min`
              : `${medias[0].qtdSeasons} season`}
          </Typography>
          <Typography variant="body1" className="p director">
            {medias[0].director}
          </Typography>
        </Box>

        <Box component="div" className="info__rate">
          <MediaRate rate={4.5}/>
        </Box>
      </Box>
    </Box>
  );
};
