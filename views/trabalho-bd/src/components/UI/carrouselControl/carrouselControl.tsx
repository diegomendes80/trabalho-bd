import './carrouselControl.scss';
import { Box } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const CarrouselControl = () => {
    return (
        <Box component="div" className="control-root">
            <Box component="span" className="control__btn previous">
                <ArrowBackIosNewOutlinedIcon className='btn-icon'/>
            </Box>

            <Box component="div" className="control__dots-display">
                <Box component="span" className="dot 1"/>
                <Box component="span" className="dot 2"/>
                <Box component="span" className="dot 3"/>
                <Box component="span" className="dot 4"/>
                <Box component="span" className="dot 5"/>
            </Box>

            <Box component="span" className="control__btn next">
                <ArrowForwardIosOutlinedIcon className='btn-icon'/>
            </Box>
        </Box>
    )
}