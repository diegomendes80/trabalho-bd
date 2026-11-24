import './mediaProducer.scss';
import { Box, Typography } from '@mui/material';
import type { Media } from '../../../types/media';

interface MediaProducerProps{
    media: Media;
}


export const MediaProducer = ({media} : MediaProducerProps) => {
    return(
        <Box component={"div"} className='media-producer-root'>
            <Typography variant='body1' className='media-producer__title'>Estúdio de Produção:</Typography>

            <Typography variant='body1' className='media-producer__name'>{media.producer.name}</Typography>

            <Box component={"div"} className='media-prodecer__details'>
                <Typography variant='body1' className='details__country'>País de origem</Typography>
                <Typography variant='body1' className='country-value'>{media.producer.country}</Typography>
            </Box>
        </Box>
    )
}