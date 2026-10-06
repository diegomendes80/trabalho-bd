import './mediaRate.scss';
import { Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


interface MediaRateProps{
    rate: number;
}

export const MediaRate = ({rate} : MediaRateProps) => {
    return (
        <Typography variant="body1" className="media__nota">
            <StarIcon className="icon-nota" /> {(rate).toString()}{" "}
          </Typography>
    )
}