import "./cardMedia.scss";
import { Box, Typography } from "@mui/material";
import { MediaRate } from "../mediaRate/mediaRate";
import type { Media } from "../../../types/media";

interface CardMediaProps {
  media: Media;
}



export const CardMedia = ({ media }: CardMediaProps) => {
  return (
    <Box component="div" className="card-media-root">
      <Box component="img" src={media.srcBannerMobile} className="card-media__bg"/>

      <Box component="span" className="card-media__type">
        {media.type == "movies" ? "Filme" : "Serie"}
      </Box>

      <Box component="div" className="card-media__info">
        <Typography variant="h3" className="info__title">
          {media.name}
        </Typography>

        <Box component="div" className="info__details">
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

        <Box component="div" className="info__rate">
          <MediaRate rate={4.5}/>
        </Box>
      </Box>
    </Box>
  );
};
