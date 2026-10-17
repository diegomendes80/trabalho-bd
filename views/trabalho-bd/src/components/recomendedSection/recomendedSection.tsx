import "./recomendedSection.scss";
import { Box, Typography } from "@mui/material";
import type { Media } from "../../types/media";
import { CardMedia } from "../UI/cardMedia/cardMedia";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

interface RecomendedSectionProps{
    medias: Media[]
}

export const RecomendedSection = ({medias}:RecomendedSectionProps) => {
  return (
    <Box component="div" className="recomended-section-root">
      <Typography variant="h2" className="recomended-section__title">
        <AutoAwesomeOutlinedIcon className="recomended-icon" /> Recomendados
        para você
      </Typography>

      <Box component="div" className="recomended-section__medias">
        {medias.map((m, i) => {
          return <CardMedia media={m} key={i} />;
        })}
      </Box>
    </Box>
  );
};
