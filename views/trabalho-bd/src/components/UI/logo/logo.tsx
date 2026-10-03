import "./logo.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";



export const Logo = () => {
  return (
    <Typography variant="h1" className="logo__text">
      cine
      <Box component="span" className="logo__text--highlight">
        matica
      </Box>
    </Typography>
  );
};
