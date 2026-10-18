import './dashboardSection.scss';
import { Box } from '@mui/material';
import { NUM_REVIEWS, ACTIVE_MEMBERS, AVERAGE_RATING } from '../../services/community';
import { DashboardCommunity } from '../dashboardCommunity/dashboardCommunity';
import { DashboardReviews } from '../dashboardReviews/dashboardReviews';
import type{ Review } from "../../types/review";

const reviews: Review[] = [
  {
    text: "Um dos melhores filmes de ficção científica que já vi. A trilha sonora é incrível.",
    username: "Sherlock",
    date: "2026-10-12",
    rate: 5,
    media: {
      name: "Interestelar",
      type: "movies",
      sinopse:
        "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
      genders: ["Ficção Científica", "Drama", "Aventura"],
      srcBanner: "https://images.alphacoders.com/129/thumb-1920-1299427.jpg",
      srcBannerMobile:
        "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
      director: "Christopher Nolan",
      releaseYear: 2014,
      minuteDuration: 169,
      saved: false,
    },
  },
  {
    text: "Começa devagar, mas a segunda temporada é de tirar o fôlego.",
    username: "Sherlock",
    date: "2026-10-15",
    rate: 4.5,
    media: {
      name: "Breaking Bad",
      type: "series",
      sinopse:
        "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina.",
      genders: ["Crime", "Drama", "Suspense"],
      srcBanner: "https://images7.alphacoders.com/108/thumb-1920-1087636.jpg",
      srcBannerMobile:
        "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
      director: "Vince Gilligan",
      releaseYear: 2008,
      qtdEpisodes: 62,
      qtdSeasons: 5,
      saved: false,
    },
  },
    {
    text: "Começa devagar, mas a segunda temporada é de tirar o fôlego.",
    username: "Sherlock",
    date: "2026-10-15",
    rate: 4.5,
    media: {
      name: "Breaking Bad",
      type: "series",
      sinopse:
        "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina.",
      genders: ["Crime", "Drama", "Suspense"],
      srcBanner: "https://images7.alphacoders.com/108/thumb-1920-1087636.jpg",
      srcBannerMobile:
        "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
      director: "Vince Gilligan",
      releaseYear: 2008,
      qtdEpisodes: 62,
      qtdSeasons: 5,
      saved: false,
    },
  },
    {
    text: "Começa devagar, mas a segunda temporada é de tirar o fôlego.",
    username: "Sherlock",
    date: "2026-10-15",
    rate: 4.5,
    media: {
      name: "Breaking Bad",
      type: "series",
      sinopse:
        "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina.",
      genders: ["Crime", "Drama", "Suspense"],
      srcBanner: "https://images7.alphacoders.com/108/thumb-1920-1087636.jpg",
      srcBannerMobile:
        "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
      director: "Vince Gilligan",
      releaseYear: 2008,
      qtdEpisodes: 62,
      qtdSeasons: 5,
      saved: false,
    },
  },
    {
    text: "Começa devagar, mas a segunda temporada é de tirar o fôlego.",
    username: "Sherlock",
    date: "2026-10-15",
    rate: 4.5,
    media: {
      name: "Breaking Bad",
      type: "series",
      sinopse:
        "Um professor de química diagnosticado com câncer passa a fabricar metanfetamina.",
      genders: ["Crime", "Drama", "Suspense"],
      srcBanner: "https://images7.alphacoders.com/108/thumb-1920-1087636.jpg",
      srcBannerMobile:
        "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01876-4c8ebd420e08f8359717181254801917-1024-1024.webp",
      director: "Vince Gilligan",
      releaseYear: 2008,
      qtdEpisodes: 62,
      qtdSeasons: 5,
      saved: false,
    },
  },
 

];

export const DashboardSection = () => {
    return(
        <Box component="div" className="dashboard-section-root">
            <DashboardCommunity num_reviews={NUM_REVIEWS} active_members={ACTIVE_MEMBERS} average_rating={AVERAGE_RATING}/>
            <DashboardReviews reviews={reviews}/>
        </Box>
    )
}