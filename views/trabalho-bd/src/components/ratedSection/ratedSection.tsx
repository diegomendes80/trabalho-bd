import './ratedSection.scss';
import { Box, Typography } from '@mui/material';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import {CardMedia} from '../UI/cardMedia/cardMedia';

export const RatedSection = () => {
    return(
        <Box component="div" className="rated-section-root">
            <Typography variant="h2" className="rated-section__title">
                <TrendingUpOutlinedIcon className='trending-icon'/> Em Alta
            </Typography>

            <Box component="div" className="rated-section__medias">
                <CardMedia/>
                <CardMedia/>
                <CardMedia/>
                <CardMedia/>
                <CardMedia/>
            </Box>
        </Box>
    )
}