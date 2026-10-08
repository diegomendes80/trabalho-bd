import "./carrouselControl.scss";
import { Box } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

interface CarrouselControlProps {
  qtd_medias: number;
  positionHighlited: number;
  onChangePosition: (value: number) => void;
}

export const CarrouselControl = ({
  qtd_medias,
  positionHighlited,
  onChangePosition,
}: CarrouselControlProps) => {
  return (
    <Box component="div" className="control-root">
      <Box component="span" className="control__btn previous" onClick={() => {onChangePosition(positionHighlited-1)}}>
        <ArrowBackIosNewOutlinedIcon className="btn-icon" />
      </Box>

      <Box component="div" className="control__dots-display">
        {Array.from({ length: qtd_medias }, (_, i) => (
          <Box key={i} component="span" className={`dot ${i} ${positionHighlited == i ? "highlited" : ""}`}/>
        ))}
       
      </Box>

      <Box component="span" className="control__btn next" onClick={() => {onChangePosition(positionHighlited+1)}}>
        <ArrowForwardIosOutlinedIcon className="btn-icon" />
      </Box>
    </Box>
  );
};
