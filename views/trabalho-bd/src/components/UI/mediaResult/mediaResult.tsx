import "./mediaResult.scss";
import { Box, Typography } from "@mui/material";
import type { Media } from "../../../types/media";
import { MediaRate } from "../mediaRate/mediaRate";


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
