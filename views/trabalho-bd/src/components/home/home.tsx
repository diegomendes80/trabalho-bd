import './home.scss';
import type { Media } from '../../types/media';
import { BackgroundMovie } from '../UI/backgroundMovie/backgroundMovie';
import { HomeInfoMedia } from '../UI/homeInfoMedia/homeInfoMedia';
import { HomeActionMedia } from '../UI/homeActionMedia/homeActionMedia';
import { Box } from '@mui/material';

import interestellarBanner from "../../assets/interestellar_bannner.jpg"
import interestellarBannerBombile from "../../assets/interestellar_bannner_mobile.jpg"
import { CarrouselControl } from '../UI/carrouselControl/carrouselControl';

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
  }
 
];

export const Home = () => {
    return(
        <Box component="div" className="home">
            <Box component="div" className="home__bg-movie">
                <BackgroundMovie srcBanner={highlightMedias[0].srcBanner} srcBannerMobile={highlightMedias[0].srcBannerMobile}></BackgroundMovie>
            </Box>

            <Box component="div" className="home__info-media">
                <HomeInfoMedia media={highlightMedias[0]} nota={4.5}/>
            </Box>

            <Box component="div" className="home__action">
                <HomeActionMedia saved={highlightMedias[0].saved}/>
            </Box>

            <Box component="div" className="home__carrousel">
                <CarrouselControl/>
            </Box>
        </Box>
    )
}