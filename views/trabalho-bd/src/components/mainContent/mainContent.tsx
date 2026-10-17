import "./mainContent.scss";
import { Box } from "@mui/material";
import { RatedSection } from "../ratedSection/ratedSection";
import { RecomendedSection } from "../recomendedSection/recomendedSection";
import type { Media } from "../../types/media";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/movies";
import { getPopularTvShows } from "../../services/series";

import { getRatedMediaByGenre } from "../../services/movies";
interface MainContentProps {
  typeMedia: string;
}

export const MainContent = ({ typeMedia }: MainContentProps) => {
  const [medias, setMedias] = useState<Media[]>([]);
  const [recomendedMedias, setRecomendedMedias] = useState<Media[]>([]);
  

  useEffect(() => {
    const fetch = typeMedia === "series" ? getPopularTvShows : getPopularMovies;
    fetch().then(setMedias);

    if(typeMedia === "movies"){
      getRatedMediaByGenre(["Ação", "Ficção Científica"], typeMedia).then(setRecomendedMedias);

    }else{
      getRatedMediaByGenre(["Ação e Aventura", "Ficção Científica e Fantasia"], typeMedia).then(setRecomendedMedias);

    }

  }, [typeMedia]);

  return (
    <Box component="div" className="main-content-root">
      <RatedSection medias={medias} />
      <RecomendedSection medias={recomendedMedias}/>
    </Box>
  );
};
