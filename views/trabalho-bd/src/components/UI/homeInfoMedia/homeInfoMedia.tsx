import "./homeInfoMedia.scss";
import { Typography, Box } from "@mui/material";
import type { Media } from "../../../types/media";
import { MediaRate } from "../mediaRate/mediaRate";

interface HomeInfoMediaProps {
  media: Media;
  nota: number;
}

export const HomeInfoMedia = ({ media, nota }: HomeInfoMediaProps) => {
  return (
    <Box component="div" className="info-media-root">
      <Box component="span" className="highlight-tag">
        em destaque
      </Box>

      <Box component="div" className="info-media__content">
        <Typography variant="h2" className="title-media">
          {media.name}
        </Typography>

        <Box component="div" className="about-media">
          
          <MediaRate rate={nota}/>

          <Typography variant="body1" className="media__p">
            {" "}
            {(media.releaseYear)}{" "}
          </Typography>
          {media.type == "movies" ? (
            <Typography variant="body1" className="media__p">
              {media.minuteDuration} min
            </Typography>
          ) : (
            <Typography variant="body1" className="media__p">
              {media.qtdSeasons} temp
            </Typography>
          )}

          {media.type == "movies" ? (
            <Typography variant="body1" className="media__p">
              {media.director} 
            </Typography>
          ) : (
            <Typography variant="body1" className="media__p">
              {media.qtdEpisodes} eps
            </Typography>
          )}


        </Box>

        <Box component="div" className="sinopse">
            {media.sinopse}
        </Box>
      </Box> 
    </Box>
  );
};
