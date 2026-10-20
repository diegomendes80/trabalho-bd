import "./cardMedia.scss";
import { Box, Typography, type BoxProps } from "@mui/material";
import { MediaRate } from "../mediaRate/mediaRate";
import type { Media } from "../../../types/media";
import { useState } from "react";
import { ActionButton } from "../actionButton/actionButton";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

interface CardMediaProps extends BoxProps {
  media: Media;
}

export const CardMedia = ({ media, className, ...props }: CardMediaProps) => {
  const [openFocus, setOpenFocus] = useState(false);
  const mainGenders = media.genders.slice(0, 2);

  return (
    <Box
      component="div"
      className="card-media-root"
      onMouseEnter={() => setOpenFocus(true)}
      onMouseLeave={() => setOpenFocus(false)}
      onClick={() => setOpenFocus(true)}
      onBlur={() => setOpenFocus(false)}
      {...props}
    >
      <Box
        component="img"
        src={media.srcBannerMobile}
        className="card-media__bg"
      />

      <Box component="div" className={`card-media-modal ${!openFocus ? "disable" : ""} `}>
        <Box component="div" className="card-media-info">
          <Typography variant="body1" className="media-modal-genders">
            {`${mainGenders[0]} | ${mainGenders[1]}`}
          </Typography>

          <Typography variant="h3" className="media-modal-title">
            {media.name}
          </Typography>
        </Box>

        <Box component="div" className="media-modal-action">
          <ActionButton
            icon={<DriveFileRenameOutlineOutlinedIcon />}
            className="reviewButton"
          >
            Resenhar
          </ActionButton>
          <ActionButton
            icon={<BookmarkBorderOutlinedIcon />}
            className={`saveButton ${media.saved ? "saved" : ""}`}
          >
            {media.saved ? "Salvo" : "Salvar"}
          </ActionButton>
        </Box>
      </Box>

      <Box
        component="span"
        className={`card-media__type ${openFocus ? "disable" : ""}`}
      >
        {media.type == "movies" ? "Filme" : "Serie"}
      </Box>

      <Box
        component="div"
        className={`card-media__info ${openFocus ? "disable" : ""}`}
      >
        <Typography variant="h3" className="info__title">
          {media.name}
        </Typography>

        <Box
          component="div"
          className={`info__details ${openFocus ? "disable" : ""}`}
        >
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

        <Box
          component="div"
          className={`info__rate ${openFocus ? "disable" : ""}`}
        >
          <MediaRate rate={4.5} />
        </Box>
      </Box>
    </Box>
  );
};
