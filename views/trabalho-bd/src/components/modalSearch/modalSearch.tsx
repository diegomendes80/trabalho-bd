import "./modalSearch.scss";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SearchInput } from "../UI/searchInput/searchInput";
import { MediaResult } from "../UI/mediaResult/mediaResult";

export const ModalSearch = () => {
  return (
    <Box component="div" className="modal-search-root">
      <Box component="div" className="modal-search__result">
        <Box component="div" className="result__close">
          <CloseIcon className="close-icon" fontSize="small" />
        </Box>

        <Box component="div" className="result__search-input">
          <SearchInput placeholder="Buscar no catálogo..." />
        </Box>

        <Box component="div" className="result__media-container">
            <MediaResult/>
            <MediaResult/>
            <MediaResult/>
            <MediaResult/>
        </Box>
      </Box>
    </Box>
  );
};
