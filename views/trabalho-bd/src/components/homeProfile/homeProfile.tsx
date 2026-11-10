import './homeProfile.scss';
import { Box } from '@mui/material';
import { Header } from '../header/header';
import { HomeProfileInfo } from '../homeProfileInfo/homeProfileInfo';
import type { User } from '../../types/user';

interface HomeProfileProps{
    user: User;
}

export const HomeProfile = ({ user}:HomeProfileProps) => {
    return(
        <Box component="div" className="home-profile-root">
            <Header/>
            <HomeProfileInfo user={user}/>
        </Box>
    )
}