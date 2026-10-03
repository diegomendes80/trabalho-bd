import './searchInput.scss';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {

    return(
        <TextField
          className="search__input"
          placeholder="Buscar no catálogo..."
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="search__icon" />
                </InputAdornment>
              ),
            },
          }}
        />
    )
}