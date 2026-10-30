import "./technicalSheet.scss";
import { Box, Typography } from "@mui/material";
import type { Media } from "../../../types/media";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";

interface TechnicalSheetProps {
  media: Media;
}

export const TechnicalSheet = ({ media }: TechnicalSheetProps) => {
  return (
    <Box component={"div"} className="technical-sheet-root">
      <Typography variant="body1" className="technical-sheet__title">
        Ficha Técnica
      </Typography>

      <Box component={"div"} className="technical-sheet-container">
        <Box component={"span"} className="technical-sheet__direction">
          <Typography variant="body1" className="title">
            <PersonOutlinedIcon className="technical-sheet__icon" /> Direção
          </Typography>
          <Typography variant="body1" className="value">
            {media.director}
          </Typography>
        </Box>

        <Box component={"span"} className="technical-sheet__release-year">
          <Typography variant="body1" className="title">
            <CalendarMonthOutlinedIcon className="technical-sheet__icon" /> Ano
          </Typography>
          <Typography variant="body1" className="value">
            {media.releaseYear}
          </Typography>
        </Box>

        <Box component={"span"} className="technical-sheet__duration">
          <Typography variant="body1" className="title">
            <AccessTimeOutlinedIcon className="technical-sheet__icon" /> Duração
          </Typography>
          <Typography variant="body1" className="value">
            {media.type == "movies"
              ? `${media.minuteDuration} minutos`
              : `${media.qtdEpisodes} Episódios`}
          </Typography>
        </Box>

        <Box component={"span"} className="technical-sheet__type">
          <Typography variant="body1" className="title">
            <LocalMoviesOutlinedIcon className="technical-sheet__icon" />{" "}
            Formato
          </Typography>
          <Typography variant="body1" className="value">
            {media.type == "movies" ? "Filme" : "Série"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
