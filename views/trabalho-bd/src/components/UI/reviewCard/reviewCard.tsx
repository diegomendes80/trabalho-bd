import './reviewCard.scss';
import { Box, Typography } from '@mui/material';
import type { Review } from '../../../types/review';
import { MediaRate } from '../mediaRate/mediaRate';

interface ReviewCardProps{
    review: Review;
}

export const ReviewCard = ({review}: ReviewCardProps) =>{
    return(
        <Box component="div" className="review-card-root">
            <Box component="img" src={review.media.srcBannerMobile} className='review-card__poster'/>

            <Box component="div" className='review-card__info-and-text'>
                <Box component="div" className="info-media">
                    <Typography variant='body1' className='info__media-title'>{review.media.name}</Typography>
                   <Box component="span" className="info__user">
                    <Typography variant='body1' className='user-p username'>{review.username}</Typography>
                    <Typography variant='body1' className='user-p date-review'>{review.date}</Typography>
                   </Box>
                </Box>

                <Typography variant="body1" className="text__review">
                    {review.text}
                </Typography>
            </Box>

            <Box component="span" className="review-card__rate">
                <MediaRate rate={review.rate}/>
            </Box>
        </Box>
    )
}