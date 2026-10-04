import "./carrouselControl.scss";
import { Box } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { MAX_HIGHLITHED_MEDIAS } from "../../home/home";

interface CarrouselControlProps {
  positionHighlited: number;
  onChangePosition: (value: number) => void;
}

export const CarrouselControl = ({
  positionHighlited,
  onChangePosition,
}: CarrouselControlProps) => {
  return (
    <Box component="div" className="control-root">
      <Box component="span" className="control__btn previous" onClick={(e) => {onChangePosition(positionHighlited-1)}}>
        <ArrowBackIosNewOutlinedIcon className="btn-icon" />
      </Box>

      <Box component="div" className="control__dots-display">
        {Array.from({ length: MAX_HIGHLITHED_MEDIAS }, (_, i) => (
          <Box key={i} component="span" className={`dot ${i} ${positionHighlited == i ? "highlited" : ""}`}/>
        ))}
       
      </Box>

      <Box component="span" className="control__btn next" onClick={() => {onChangePosition(positionHighlited+1)}}>
        <ArrowForwardIosOutlinedIcon className="btn-icon" />
      </Box>
    </Box>
  );
};
