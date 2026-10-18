import './dashboardReviews.scss';
import { Box, Typography } from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import type { Review } from '../../types/review';
import { ReviewCard } from '../UI/reviewCard/reviewCard';

interface DashboardReviewsProps{
   reviews: Review[];
    
}

export const DashboardReviews = ({reviews}:DashboardReviewsProps) => {
    return(
        <Box component="div" className="dashboard-reviews-root">
            <Typography variant='h3' className="dashboard-reviews__title">
                <ModeCommentOutlinedIcon className="reviews-icon"/>
                Resenhas Recentes
            </Typography>

            <Box component="div" className="dashboard-review__reviews-container">
                {reviews.map((r) => {
                    return <ReviewCard review={r}/>
                })}
            </Box>
        </Box>
    )
}