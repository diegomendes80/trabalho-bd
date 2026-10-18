import './dashboardCommunity.scss'
import { Box, Typography } from '@mui/material'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

interface DashboardCommunityProps{
  num_reviews: Number;
  active_members: Number;
  average_rating: Number;

}

export const DashboardCommunity = ({num_reviews, active_members, average_rating} : DashboardCommunityProps) => {
    return(
        <Box component="div" className="dashboard-community-root">
            <Typography variant='h3' className="dashboard-community__title">
                <TimelineOutlinedIcon className="dashboard-icon"/> comunidade
            </Typography>

            <Box component="div" className="dashboard-community__data">
                <Box component="span" className="data__reviews data">
                    {(num_reviews).toLocaleString("pt-BR")}
                    <Typography variant='body1' className="data-text">Resenhas Hoje</Typography> 
                </Box>

                <Box component="span" className="data__average data">
                    {(average_rating).toLocaleString("pt-BR")}
                    <Typography variant='body1' className="data-text">Nota Média</Typography> 
                </Box>

                <Box component="span" className="data__members data">
                    {(active_members).toLocaleString("pt-BR")}
                    <Typography variant='body1' className="data-text">Membros Ativos</Typography> 
                </Box>
            </Box>
        </Box>
    )
} 