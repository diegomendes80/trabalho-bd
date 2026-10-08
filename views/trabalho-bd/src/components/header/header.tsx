import "./header.scss";
import Box from "@mui/material/Box";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { SwitchButton } from "../UI/toggleButton/togglebutton.tsx";
import { ActionButton } from "../UI/actionButton/actionButton.tsx";
import { ProfileIcon } from "../UI/profileIcon/profileIcon.tsx";
import { Logo } from "../UI/logo/logo.tsx";
import { SearchInput } from "../UI/searchInput/searchInput.tsx";

interface HeaderProps {
 
  onToggleMediaType: (type: "movies" | "series") => void;
  onHandleOpenProfile: (type: string) => void;
  onClickInputSearch: (type: boolean) => void;

}

export const Header = ({
  onToggleMediaType,
  onHandleOpenProfile,
  onClickInputSearch,
}: HeaderProps) => {
  return (
    <Box component="header" className="header">
      <Box component="div" className="header__logo">
        <Logo />
      </Box>

      <Box component="div" className="header__search">
        <SearchInput
          placeholder="Buscar no catálogo..."
          onFocus={() => {
            onClickInputSearch(true);
       
          }}
        />
      </Box>

      <Box component="div" className="header__theme-switch">
        <SwitchButton onToggleMediaType={onToggleMediaType} />
      </Box>

      <Box component="div" className="header__action-review">
        <ActionButton
          onClick={() => console.log("Log Resenha clicked")}
          icon={<AddOutlinedIcon />}
        >
          Log Resenha
        </ActionButton>
      </Box>

      <Box component="div" className="header__profile">
        <ProfileIcon
          name="Sherlock"
          onHandleOpenProfile={onHandleOpenProfile}
        />
      </Box>
    </Box>
  );
};
