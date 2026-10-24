import './profileStash.scss';
import { Box } from '@mui/material';
import { SavedList } from '../savedList/savedList';
import type { Media } from '../../types/media';
import type { Review } from '../../types/review';

interface ProfileStashProps{
    savedMedias: Media[];
    userReviews: Review[];
}

export const ProfileStash = ({savedMedias, userReviews} : ProfileStashProps) => {
    return(
        <Box component={"div"} className='profile-stash-root'>
            <SavedList savedMedias={savedMedias}/>
        </Box>
    )
}