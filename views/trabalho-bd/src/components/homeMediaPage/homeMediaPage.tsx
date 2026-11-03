import "./homeMediaPage.scss";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { HomeMediaPageInfo } from "../homeMediaPageInfo/homeMediaPageInfo";
import { ModalReview } from "../modalReview/modalReview";
import type { Media } from "../../types/media";

interface HomeMediaPageProps {
  media: Media;
  openReview: boolean;
  isEditing: Boolean;
  onClickClose: (type: boolean) => void;
}

export const HomeMediaPage = ({ media, openReview, isEditing, onClickClose }: HomeMediaPageProps) => {
  const navigate = useNavigate();

  return (
    <Box component={"div"} className="home-media-page-root">

      <ModalReview media={media} openReview={openReview} isEditing={isEditing} onClickClose={onClickClose}/>

      <Box
        component={"div"}
        className="home-media-page__back"
        onClick={() => navigate("/")}
      >
        <Typography variant="body1" className="back__text">
          <KeyboardBackspaceOutlinedIcon
            sx={{ userSelect: "none", WebkitTouchCallout: "none" }}
          />{" "}
          Voltar para o catálogo
        </Typography>
      </Box>

      <HomeMediaPageInfo media={media} onClickReview={onClickClose}/>
    </Box>
  );
};
