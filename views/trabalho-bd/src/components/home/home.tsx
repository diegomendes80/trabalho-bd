import "./home.scss";
import { useState, useEffect } from "react";
import type { Media } from "../../types/media";
import { BackgroundMovie } from "../UI/backgroundMovie/backgroundMovie";
import { HomeInfoMedia } from "../UI/homeInfoMedia/homeInfoMedia";
import { HomeActionMedia } from "../UI/homeActionMedia/homeActionMedia";
import { Box } from "@mui/material";

import { CarrouselControl } from "../UI/carrouselControl/carrouselControl";

export const MAX_HIGHLITHED_MEDIAS = 5;

//change afeter for the api call movies
const initialtMedias: Media[] = [
  {
    name: "Interestelar",
    type: "movies",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
    genders: ["Ficção Científica", "Drama", "Aventura"],
    srcBanner: "https://images.alphacoders.com/129/thumb-1920-1299427.jpg",
    srcBannerMobile:
      "https://br.web.img3.acsta.net/r_1920_1080/pictures/14/10/31/20/39/476171.jpg",
    director: "Christopher Nolan",
    releaseYear: 2014,
    minuteDuration: 169,
    saved: true,
  },
  {
    name: "Breaking Bad",
    type: "series",
    sinopse:
      "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina para garantir o futuro financeiro da família.",
    genders: ["Crime", "Drama", "Suspense"],
    srcBanner: "https://images7.alphacoders.com/108/thumb-1920-1087636.jpg",
    srcBannerMobile:
      "https://i.pinimg.com/736x/09/0c/92/090c9262f9899224a531353c9743a06d.jpg",
    director: "Vince Gilligan",
    releaseYear: 2008,
    minuteDuration: 47,
    qtdEpisodes: 62,
    qtdSeasons: 5,
    saved: false,
  },
  {
    name: "Cidade de Deus",
    type: "movies",
    sinopse:
      "Dois jovens crescem na periferia do Rio de Janeiro e seguem caminhos opostos em meio à violência e ao tráfico de drogas.",
    genders: ["Crime", "Drama"],
    srcBanner:
      "https://www.lab111.nl/wp-content/uploads/2019/11/Cidade-De-Deus-Bannerkopie.jpg",
    srcBannerMobile:
      "https://image.tmdb.org/t/p/original/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
    director: "Fernando Meirelles",
    releaseYear: 2002,
    minuteDuration: 130,
    saved: false,
  },
  {
    name: "Dark",
    type: "series",
    sinopse:
      "O desaparecimento de crianças em uma pequena cidade alemã revela segredos de quatro famílias e uma conspiração que atravessa gerações.",
    genders: ["Ficção Científica", "Mistério", "Suspense"],
    srcBanner: "https://picfiles.alphacoders.com/170/thumb-1920-170956.jpg",
    srcBannerMobile:
      "https://www.themoviedb.org/t/p/w1280/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    director: "Baran bo Odar",
    releaseYear: 2017,
    minuteDuration: 55,
    qtdEpisodes: 26,
    qtdSeasons: 3,
    saved: true,
  },
  {
    name: "Parasita",
    type: "movies",
    sinopse:
      "Uma família pobre se infiltra aos poucos na casa de uma família rica, e a convivência entre as duas termina de forma inesperada.",
    genders: ["Suspense", "Drama", "Comédia"],
    srcBanner:
      "https://topico42.com.br/wp-content/uploads/2020/01/Parasita-1536x864.jpg",
    srcBannerMobile:
      "https://www.themoviedb.org/t/p/w1280/bNGW8zYA91VqTZfV3jnKHPEKKvB.jpg",
    director: "Bong Joon-ho",
    releaseYear: 2019,
    minuteDuration: 132,
    saved: false,
  },
];

export const Home = () => {
  const [medias, setMedias] = useState<Media[]>(initialtMedias);
  const [positionHighlighted, setPositionHighlighted] = useState(0);
  const mediaHighlighted = medias[positionHighlighted];

  const setNewHighlited = (newPosition: number) => {
    const total = medias.length;
    setPositionHighlighted((newPosition + total) % total);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setNewHighlited(positionHighlighted + 1);
    }, 5000);

    return () => clearInterval(id);
  });

  const setMediaSaved = (id: number) => {
    setMedias((prev) =>
      prev.map((media, i) =>
        i === id ? { ...media, saved: !media.saved } : media,
      ),
    );
  };

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
          positionHighlited={positionHighlighted}
          onChangePosition={setNewHighlited}
        />
      </Box>
    </Box>
  );
};
