import { useTheme } from "@mui/material/styles";
import styles from "./header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
    return (  
        <Box className={"header"} component="header">
        <Box component="div" className={"header__logo"}>
        <Typography variant="h1" className={"logo__text"}>
            cine
            <Box component="span" className={"logo__text--highlight"}>
            matica
            </Box>
        </Typography>
        </Box>

        <Box component="div" className={"header__search"}>
        <TextField
            className={"search__input"}
            placeholder="Buscar no catálogo"
            slotProps={{
            input: {
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
            },
            }}
        />
        </Box>
    </Box>
    )
};


