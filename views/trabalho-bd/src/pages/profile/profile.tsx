import "./profile.scss";

import { Box } from "@mui/material";
import { HomeProfile } from "../../components/homeProfile/homeProfile";
import { useNavigate } from "react-router-dom";
import type { Media } from "../../types/media";
import type { User } from "../../types/user";
import type { Review } from "../../types/review";

const interestelar: Media = {
  name: "Interestelar",
  type: "movies",
  sinopse:
    "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta o colapso.",
  genders: ["Ficção Científica", "Drama", "Aventura"],
  srcBanner: "https://images.alphacoders.com/129/thumb-1920-1299427.jpg",
  srcBannerMobile:
    "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
  director: "Christopher Nolan",
  releaseYear: 2014,
  minuteDuration: 169,
  saved: true,
};

const breakingBad: Media = {
  name: "Breaking Bad",
  type: "series",
  sinopse:
    "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina para garantir o futuro financeiro da família.",
  genders: ["Crime", "Drama", "Suspense"],
  srcBanner: "https://images7.alphacoders.com/108/thumb-1920-1087636.jpg",
  srcBannerMobile:
    "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
  director: "Vince Gilligan",
  releaseYear: 2008,
  qtdEpisodes: 62,
  qtdSeasons: 5,
  saved: true,
};

const reviews: Review[] = [
  {
    text: "Um dos melhores filmes de ficção científica que já vi. A trilha sonora é incrível.",
    username: "Sherlock",
    date: "2026-10-12",
    rate: 5,
    media: interestelar,
  },
  {
    text: "Começa devagar, mas a segunda temporada é de tirar o fôlego.",
    username: "Sherlock",
    date: "2026-10-15",
    rate: 4.5,
    media: breakingBad,
  },
];

export const defaultUser: User = {
  name: "Sherlock Holmes",
  usercode: "SH001",
  email: "sherlock@email.com",
  bioPhrase: "Elementar, meu caro. Cinéfilo de plantão e viciado em séries de crime. Amante de neo-noir, ficção científica e tudo que Villeneuve dirige.",
  registerDate: new Date("2024-03-18"),
  birthdate: new Date("1990-01-06"),
  savedMedias: [interestelar, breakingBad],
  reviews: reviews,
};

export const Profile = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <Box component="div" className="profile-root">
      <HomeProfile onClickLogo={handleClickLogo} user={defaultUser}/>
    </Box>
  );
};
