import "./ratedSection.scss";
import { Box, Typography } from "@mui/material";
import type { Media } from "../../types/media";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { CardMedia } from "../UI/cardMedia/cardMedia";

interface RatedSectionProps {
  medias: Media[];
}

export const RatedSection = ({ medias }: RatedSectionProps) => {
  return (
    <Box component="div" className="rated-section-root">
      <Typography variant="h2" className="rated-section__title">
        <TrendingUpOutlinedIcon className="trending-icon" /> Em Alta
      </Typography>

      <Box component="div" className="rated-section__medias">
        {medias.map((m, i) => {
          return <CardMedia media={m} key={i} />;
        })}
      </Box>
    </Box>
  );
};
