import "./homeProfileInfo.scss";
import { Box, Typography } from "@mui/material";
import { HomeProfileAvatar } from "../UI/homeProfileAvatar/homeProfileAvatar";
import type { User } from "../../types/user";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

interface HomeProfileInfoProps {
  user: User;
}

export const HomeProfileInfo = ({ user }: HomeProfileInfoProps) => {

  const averageRate = user.reviews.reduce((a, r) => a + r.rate, 0) / user.reviews.length;
  let totalMovies = 0; 
  let TotalSeries = 0;
  user.reviews.map((r) => {
    if(r.media.type == "movies") totalMovies++;
    else TotalSeries++;
  })

  return (
    <Box component="div" className="home-profile-info-root">
      <Box component={"div"} className="home-profile-info__presentation">
        <HomeProfileAvatar username={user.name} />

        <Box component={"div"} className="presentation__bio">
          <Typography variant="h3" className="bio__name">
            {user.name}
          </Typography>
          <Typography
            variant="body1"
            className="bio__usercode"
          >{`@${user.usercode}`}</Typography>
          <Typography variant="body1" className="bio__phrase">
            {user.bioPhrase}
          </Typography>
          <Typography
            variant="body1"
            className="bio__since"
          >{`Ativo desde ${user.registerDate.getFullYear()}`}</Typography>
        </Box>
      </Box>

      <Box component="div" className="home-profile-info__cards">
        <Box component={"div"} className="cards__card reviews">
          <StarBorderOutlinedIcon className="card__icon"/>
          <Typography variant="body1" className="card__value">{user.reviews.length.toString()}</Typography>
          <Typography variant="body1" className="card__text">Resenhas</Typography>
        </Box>

        <Box component={"div"} className="cards__card saveds">
          <BookmarkBorderOutlinedIcon className="card__icon"/>
          <Typography variant="body1" className="card__value">{user.savedMedias.length.toString()}</Typography>
          <Typography variant="body1" className="card__text">Salvos</Typography>
        </Box>

        <Box component={"div"} className="cards__card average">
          <WorkspacePremiumOutlinedIcon className="card__icon"/>
          <Typography variant="body1" className="card__value">{averageRate.toString()}</Typography>
          <Typography variant="body1" className="card__text">Nota Média</Typography>
        </Box>

        <Box component={"div"} className="cards__card movies">
          <MovieOutlinedIcon className="card__icon"/>
          <Typography variant="body1" className="card__value">{totalMovies.toString()}</Typography>
          <Typography variant="body1" className="card__text">Filmes</Typography>
        </Box>

         <Box component={"div"} className="cards__card series">
          <MovieOutlinedIcon className="card__icon"/>
          <Typography variant="body1" className="card__value">{TotalSeries.toString()}</Typography>
          <Typography variant="body1" className="card__text">Séries</Typography>
        </Box>
      </Box>
    </Box>
  );
};
