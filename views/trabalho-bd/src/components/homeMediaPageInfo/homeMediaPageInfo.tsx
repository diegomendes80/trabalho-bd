import "./homeMediaPageInfo.scss";
import { Box, Typography } from "@mui/material";
import type { Media } from "../../types/media";
import { MediaRate } from "../UI/mediaRate/mediaRate";
import { ActionButton } from "../UI/actionButton/actionButton";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

interface HomeMediaPageInfoProps {
  media: Media;
}

export const HomeMediaPageInfo = ({ media }: HomeMediaPageInfoProps) => {
  return (
    <Box component={"div"} className="home-media-page-info-root">
      <Box component={"div"} className="page-info__banner">
        <Box
          component="img"
          src={media.srcBannerMobile}
          className="banner__bg"
        />
      </Box>

      <Box component={"div"} className="page-info__content">
        <Typography variant="h2" className="content__title">
          {media.name}
        </Typography>

        <Box component={"div"} className="content__details">
          <MediaRate rate={4.5} />

          <Box component={"span"} className="details__release-year">
            <DateRangeOutlinedIcon  className="details-icon"/>
            {media.releaseYear}
          </Box>

          <Box component={"span"} className="details__duration">
            <AccessTimeOutlinedIcon className="details-icon"/>
            {media.type == "movies"
              ? `${media.minuteDuration} minutos`
              : `${media.qtdSeasons} Temporadas - ${media.qtdEpisodes} Episódios`}
          </Box>
        </Box>

        <Box component={"div"} className="content__genders">
          {media.genders.map((g) => {
            return (
              <Box component={"span"} className="genders__value">
                {g}
              </Box>
            );
          })}
        </Box>

        <Box component={"div"} className="content__sinopse">
          <Typography variant="body1" className="sinopse__text">
            {media.sinopse}
          </Typography>
        </Box>

        <Box component={"div"} className="content__actions">
            <ActionButton icon={<RateReviewOutlinedIcon/>} className="review">Deixar Resenha</ActionButton>
            <ActionButton icon={<BookmarkBorderOutlinedIcon/>} className="save-to-list">+ Minha Lista</ActionButton>

        </Box>
      </Box>
    </Box>
  );
};
