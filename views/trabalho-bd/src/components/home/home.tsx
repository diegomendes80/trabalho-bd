import "./home.scss";
import { useState, useEffect } from "react";
import type { Media } from "../../types/media";
import { BackgroundMovie } from "../UI/backgroundMovie/backgroundMovie";
import { HomeInfoMedia } from "../UI/homeInfoMedia/homeInfoMedia";
import { HomeActionMedia } from "../UI/homeActionMedia/homeActionMedia";
import { Box } from "@mui/material";

import interestellarBanner from "../../assets/interestellar_bannner.jpg";
import interestellarBannerBombile from "../../assets/interestellar_bannner_mobile.jpg";
import { CarrouselControl } from "../UI/carrouselControl/carrouselControl";

export const MAX_HIGHLITHED_MEDIAS = 5;

//change afeter for the api call movies
const highlightMedias: Media[] = [
  {
    name: "Interestelar",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner: interestellarBanner,
    srcBannerMobile: interestellarBannerBombile,
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: true,
  },
  {
    name: "Teste 1",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner: interestellarBanner,
    srcBannerMobile: interestellarBannerBombile,
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: true,
  },
  {
    name: "Teste 2",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner: interestellarBanner,
    srcBannerMobile: interestellarBannerBombile,
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: true,
  },
  {
    name: "Teste 3",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner: interestellarBanner,
    srcBannerMobile: interestellarBannerBombile,
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: true,
  },
  {
    name: "Teste 4",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner: interestellarBanner,
    srcBannerMobile: interestellarBannerBombile,
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: true,
  },
];

export const Home = () => {
  const [positionHighlighted, setPositionHighlighted] = useState(0);
  const [mediaHighlighted, setMediaHighlighted] = useState(highlightMedias[0]);

  const setNewHighlited = (newPosition: number) => {
    if (newPosition < 0) {
      setPositionHighlighted(MAX_HIGHLITHED_MEDIAS - 1);
      setMediaHighlighted(highlightMedias[MAX_HIGHLITHED_MEDIAS - 1]);
    } else if (newPosition >= MAX_HIGHLITHED_MEDIAS) {
      setPositionHighlighted(0);
      setMediaHighlighted(highlightMedias[0]);
    } else {
      setPositionHighlighted(newPosition);
      setMediaHighlighted(highlightMedias[newPosition]);

    }
  };

  useEffect(() => {
    const id = setInterval(() => {
        setNewHighlited(positionHighlighted+1)
    }, 5000)

    return () => clearInterval(id);
  })

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
        <HomeActionMedia saved={mediaHighlighted.saved} />
      </Box>

      <Box component="div" className="home__carrousel">
        <CarrouselControl
          positionHighlited={positionHighlighted}
          onChangePosition={setNewHighlited}
        />
      </Box>
    </Box>
  );
};
