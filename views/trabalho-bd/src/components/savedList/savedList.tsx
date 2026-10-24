import './savedList.scss';
import { Box, Typography } from '@mui/material';
import type { Media } from '../../types/media';
import { MediaResult } from '../UI/mediaResult/mediaResult';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

interface SavedListProps{
    savedMedias: Media[];
}

export const SavedList = ({savedMedias}:SavedListProps) => {
    return(
        <Box component={"div"} className='saved-list-root'>
            <Typography variant='h3' className='saved-list__title'>
                <BookmarkBorderOutlinedIcon className='saved-list__icon'/>
                Minha Lista
            </Typography>

            <Box component={"div"} className='saved-list__medias'>
                {savedMedias.map((m) => {
                    return <MediaResult media={m}/>
                })}
            </Box>
        </Box>
    )
}