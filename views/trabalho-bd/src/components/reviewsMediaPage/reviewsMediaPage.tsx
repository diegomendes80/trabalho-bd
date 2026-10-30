import "./reviewsMediaPage.scss";
import { Box, Typography } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import type { Review } from "../../types/review";
import { ReviewCard } from "../UI/reviewCard/reviewCard";

export const reviews: Review[] = [
  {
    text: "Visualmente impecável, com uma trilha que grudou na cabeça. O terceiro ato é um pouco corrido, mas o conjunto vale muito.",
    username: "Sherlock",
    date: "2026-10-10",
    rate: 4.5,
    media: {
      name: "TESTE",
      type: "movies",
      sinopse:
        "Uma exploradora atravessa um deserto de sal em busca de uma cidade que só aparece em mapas antigos.",
      genders: ["Aventura", "Drama"],
      srcBanner: "https://picsum.photos/seed/horizonte/1920/1080",
      srcBannerMobile: "https://picsum.photos/seed/horizonte/800/1200",
      director: "Marina Albuquerque",
      releaseYear: 2021,
      minuteDuration: 128,
      saved: false,
    },
  },
  {
    text: "Começa devagar, mas a partir do quarto episódio não consegui parar. Elenco muito bem escolhido.",
    username: "Watson",
    date: "2026-10-18",
    rate: 4,
    media: {
      name: "TESTE",
      type: "series",
      sinopse:
        "Analistas de segurança investigam invasões que parecem vir de dentro da própria agência.",
      genders: ["Suspense", "Tecnologia"],
      srcBanner: "https://picsum.photos/seed/codigo/1920/1080",
      srcBannerMobile: "https://picsum.photos/seed/codigo/800/1200",
      director: "Rafael Tavares",
      releaseYear: 2023,
      qtdEpisodes: 24,
      qtdSeasons: 3,
      saved: true,
    },
  },
  {
    text: "Leve e divertido, bom pra assistir em grupo. Não reinventa nada, mas entrega o que promete.",
    username: "Irene",
    date: "2026-10-25",
    rate: 3.5,
    media: {
      name: "TESTE",
      type: "movies",
      sinopse:
        "Três amigos de infância se reencontram na cidade litorânea onde cresceram para decidir o destino de uma casa herdada.",
      genders: ["Comédia", "Romance"],
      srcBanner: "https://picsum.photos/seed/verao/1920/1080",
      srcBannerMobile: "https://picsum.photos/seed/verao/800/1200",
      director: "Camila Duarte",
      releaseYear: 2019,
      minuteDuration: 104,
      saved: false,
    },
  },
];

// interface ReviewsMediaPageProps {
//   reviews: Review[];
// }

export const ReviewsMediaPage = () => {
  return (
    <Box component={"div"} className="reviews-media-page-root">
      <Typography variant="h3" className="reviews-media-page__title">
        <ModeCommentOutlinedIcon className="reviews__icon" />
        Resenhas da comunidade
      </Typography>

      <Box component={"div"} className="reviews-media-page__reviews">
        {reviews.map((r) => {
            return <ReviewCard review={r}/>
        })}
      </Box>
    </Box>
  );
};
