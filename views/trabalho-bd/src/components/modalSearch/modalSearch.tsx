import "./modalSearch.scss";
import { useRef, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SearchInput } from "../UI/searchInput/searchInput";
import { MediaResult } from "../UI/mediaResult/mediaResult";
import type { Media } from "../../types/media";
import { getMovie } from "../../services/movies";

interface ModalSearchProps {
  openSearch: boolean;
  onClickClose: (close: boolean) => void;
  //  onChangeInput: (value: string) => void;
}

export const ModalSearch = ({ openSearch, onClickClose }: ModalSearchProps) => {
  const [valueSearched, setValueSearched] = useState("");
  const [medias, setMedias] = useState<Media[]>([]);

  useEffect(() => {
    if (valueSearched.trim().length == 0) {
      setMedias([]);
      return;
    }

    const timer = setTimeout(async () => {
      const results = await getMovie(valueSearched);
      setMedias(results);
    }, 50);

    return () => clearTimeout(timer);
  }, [valueSearched]);

  return (
    <Box
      component="div"
      className={`modal-search-root ${openSearch == false ? "disable" : ""}`}
    >
      <Box component="div" className="modal-search__result">
        <Box component="div" className="result__close">
          <CloseIcon
            className="close-icon"
            fontSize="small"
            onClick={() => onClickClose(false)}
          />
        </Box>

        <Box component="div" className="result__search-input">
          <SearchInput
            placeholder="Buscar no catálogo..."
            onChange={(e) => {
              setValueSearched(e.target.value);
            }}
          />
        </Box>

        <Box component="div" className="result__media-container">
          {medias.map((m, i) => {
            return <MediaResult key={i} media={m}/>;
          })}
        </Box>
      </Box>
    </Box>
  );
};
