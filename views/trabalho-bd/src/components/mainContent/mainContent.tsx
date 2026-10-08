import "./mainContent.scss";
import { Box } from "@mui/material";
import { RatedSection } from "../ratedSection/ratedSection";
import type { Media } from "../../types/media";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/movies";
import { getPopularTvShows } from "../../services/series";

interface MainContentProps {
  typeMedia: string;
}

export const MainContent = ({ typeMedia }: MainContentProps) => {
  const [medias, setMedias] = useState<Media[]>([]);

  useEffect(() => {
    const fetch = typeMedia === "series" ? getPopularTvShows : getPopularMovies;
    fetch().then(setMedias);
  }, [typeMedia]);

  return (
    <Box component="div" className="main-content-root">
      <RatedSection medias={medias} />
    </Box>
  );
};
