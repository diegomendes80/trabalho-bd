import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { Media } from "../../types/media";
import "./mediaPage.scss";
import { Box } from "@mui/material";
import { Header } from "../../components/header/header";
import { HomeMediaPage } from "../../components/homeMediaPage/homeMediaPage";

export const MediaPage = () => {
  const { name } = useParams();
  const location = useLocation();
  const media = (location.state as { media?: Media } | null)?.media;

  useEffect(() => {
    if (media) return;
  }, [media, name]);

  if (!media) return null;

  return (
    <Box component={"div"} className="media-root">
      <Header />
      <HomeMediaPage media={media}/>
    </Box>
  );
};
