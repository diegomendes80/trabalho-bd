import "./userReviews.scss";
import { Box, Typography } from "@mui/material";
import type { Review } from "../../types/review";
import { ReviewCardUser } from "../UI/reviewCardUser/reviewCardUser";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

interface UserReviewsProps {
  userReviews: Review[];
}

export const UserReviews = ({ userReviews }: UserReviewsProps) => {
  return (
    <Box component={"div"} className="user-reviews-root">
      <Typography variant="h3" className="user-reviews__title">
        <RateReviewOutlinedIcon className="user-reviews__icon" />
        Minhas Resenhas
      </Typography>

      <Box component={"div"} className="user-reviews__reviews">
        {userReviews.map((r) => {
          return <ReviewCardUser review={r} />;
        })}
      </Box>
    </Box>
  );
};
