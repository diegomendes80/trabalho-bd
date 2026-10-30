import "./homeMediaPage.scss";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { HomeMediaPageInfo } from "../homeMediaPageInfo/homeMediaPageInfo";
import type { Media } from "../../types/media";

interface HomeMediaPageProps{
    media:Media;
}

export const HomeMediaPage = ({media}:HomeMediaPageProps) => {

const navigate = useNavigate();

  return (
    <Box component={"div"} className="home-media-page-root">
      <Box component={"div"} className="home-media-page__back" onClick={() => navigate("/")}>
        <Typography variant="body1" className="back__text">
          <KeyboardBackspaceOutlinedIcon sx={{ userSelect: "none", WebkitTouchCallout: "none" }}/> Voltar para o catálogo
        </Typography>
      </Box>

      <HomeMediaPageInfo media={media}/>
    </Box>
  );
};
