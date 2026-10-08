import './mainContent.scss';
import { Box } from '@mui/material';
import { RatedSection } from '../ratedSection/ratedSection';

export const MainContent = () =>{
    return(
        <Box component="div" className="main-content-root">
            <RatedSection/>
        </Box>
    )
}