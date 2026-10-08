import "./home.scss";
import { useState, useEffect } from "react";
import type { Media } from "../../types/media";
import { getPopularMovies } from "../../services/movies";
import { getPopularTvShows } from "../../services/series";
import { BackgroundMovie } from "../UI/backgroundMovie/backgroundMovie";
import { HomeInfoMedia } from "../UI/homeInfoMedia/homeInfoMedia";
import { HomeActionMedia } from "../UI/homeActionMedia/homeActionMedia";
import { Box } from "@mui/material";
import { CarrouselControl } from "../UI/carrouselControl/carrouselControl";

export const MAX_HIGHLITHED_MEDIAS = 5;

interface HomeProps {
  typeMedia: string;
}

export const Home = ({ typeMedia }: HomeProps) => {
  const [medias, setMedias] = useState<Media[]>([]);
  const [positionHighlighted, setPositionHighlighted] = useState(0);
  const mediaHighlighted = medias[positionHighlighted];

  useEffect(() => {
    setPositionHighlighted(0);
    const fetch = typeMedia === "series" ? getPopularTvShows : getPopularMovies;
    fetch().then(setMedias);
  }, [typeMedia]);

  const setNewHighlited = (newPosition: number) => {
    const total = medias.length;
    setPositionHighlighted((newPosition + total) % total);
  };

  useEffect(() => {
    if (medias.length === 0) return;
    const id = setInterval(() => {
      setNewHighlited(positionHighlighted + 1);
    }, 5000);

    return () => clearInterval(id);
  }, [positionHighlighted, medias.length]);

  const setMediaSaved = (id: number) => {
    setMedias((prev) =>
      prev.map((media, i) =>
        i === id ? { ...media, saved: !media.saved } : media,
      ),
    );
  };

  if (!mediaHighlighted) return null;

  return (
    <Box component="div" className="home">
      <Box component="div" className="home__bg-movie">
        <BackgroundMovie
          srcBanner={mediaHighlighted.srcBanner}
          srcBannerMobile={mediaHighlighted.srcBannerMobile}
        ></BackgroundMovie>
      </Box>

      <Box component="div" className="home__info-media">
        <HomeInfoMedia media={mediaHighlighted} nota={4.5} />
      </Box>

      <Box component="div" className="home__action">
        <HomeActionMedia
          id={positionHighlighted}
          setMediaSaved={setMediaSaved}
          saved={mediaHighlighted.saved}
        />
      </Box>

      <Box component="div" className="home__carrousel">
        <CarrouselControl
          qtd_medias={medias.length}
          positionHighlited={positionHighlighted}
          onChangePosition={setNewHighlited}
        />
      </Box>
    </Box>
  );
};
