import './header.scss';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { SwitchButton } from "../UI/toggleButton/togglebutton.tsx";
import { ActionButton } from "../UI/actionButton/actionButton.tsx";
import {ProfileIcon} from "../UI/profileIcon/profileIcon.tsx";
import { Logo } from "../UI/logo/logo.tsx";
import { SearchInput } from "../UI/searchInput/searchInput.tsx";

interface HeaderProps {
  onToggleTheme: () => void;
}

export const Header = ({onToggleTheme} : HeaderProps) => {


  return (
    <Box  component="header" className="header">
      <Box component="div" className="header__logo">
       <Logo/>
      </Box>

      <Box component="div" className="header__search">
        <SearchInput/>
      </Box>

      <Box component="div" className="header__therme-switch">
        <SwitchButton/>
      </Box>

      <Box component="div" className="header__action-review">
          <ActionButton onClick={() => console.log("Log Resenha clicked")} icon={<AddOutlinedIcon />}>
            Log Resenha
          </ActionButton>
      </Box>

      <Box component="div" className="header__profile">
        <ProfileIcon name="Sherlock"/>
      </Box>
    </Box>
  );
};


