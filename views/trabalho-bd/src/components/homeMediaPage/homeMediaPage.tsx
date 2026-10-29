import "./homeMediaPage.scss";
import { Box, Typography } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { HomeMediaPageInfo } from "../homeMediaPageInfo/homeMediaPageInfo";
import type { Media } from "../../types/media";

interface HomeMediaPageProps{
    media:Media;
}

export const HomeMediaPage = ({media}:HomeMediaPageProps) => {
  return (
    <Box component={"div"} className="home-media-page-root">
      <Box component={"div"} className="home-media-page__back">
        <Typography variant="body1" className="back__text">
          <KeyboardBackspaceOutlinedIcon /> Voltar para o catálogo
        </Typography>
      </Box>

      <HomeMediaPageInfo media={media}/>
    </Box>
  );
};
