import './searchInput.scss';
import TextField  from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

type SearchInputProps = TextFieldProps;

export const SearchInput = ({...props}:SearchInputProps) => {

    return(
        <TextField
          className="search__input"
          {...props}
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