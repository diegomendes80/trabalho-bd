import "./homeActionMedia.scss";
import { Box } from "@mui/material";
import { ActionButton } from "../actionButton/actionButton";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

interface HomeActionMediaProps {
  id: number;
  saved: boolean;
  setMediaSaved: (id: number) => void;
}

export const HomeActionMedia = ({ id, saved, setMediaSaved }: HomeActionMediaProps) => {
  return (
    <Box component="div" className="action-media-root">
      <ActionButton icon={<RateReviewOutlinedIcon />} className="rate-button">
        Deixar Resenha
      </ActionButton>
      <ActionButton
        icon={<BookmarkBorderOutlinedIcon />}
        className={`save-button ${saved ? "saved" : ""}`}
        onClick={() => {
          setMediaSaved(id)
        }}
      >
        {saved ? "Na Minha Lista" : "Minha Lista"}
      </ActionButton>
    </Box>
  );
};
