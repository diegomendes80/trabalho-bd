import "./modalSearch.scss";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SearchInput } from "../UI/searchInput/searchInput";
import { MediaResult } from "../UI/mediaResult/mediaResult";
import type { Media } from "../../types/media";
import { getMovie } from "../../services/movies";

interface ModalSearchProps {
  openSearch: boolean;
  onClickClose: (close: boolean) => void;
  searchValue: string;
  onChangeSearch: (type: string) => void;
}

export const ModalSearch = ({
  openSearch,
  onClickClose,
  searchValue,
  onChangeSearch,
}: ModalSearchProps) => {
  const [medias, setMedias] = useState<Media[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!openSearch) return;

    const el = inputRef.current;
    el?.focus();
    el?.setSelectionRange(el.value.length, el.value.length);
  }, [openSearch]);

  useEffect(() => {
    if (searchValue.trim().length == 0) {
      setMedias([]);
      return;
    }

    const timer = setTimeout(async () => {
      const results = await getMovie(searchValue);
      setMedias(results);
    }, 50);

    return () => clearTimeout(timer);
  }, [searchValue]);

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
            value={searchValue}
            inputRef={inputRef}
            onChange={(e) => {
              onChangeSearch?.(e.target.value);
            }}
          />
        </Box>

        <Box component="div" className="result__media-container">
          {medias.map((m, i) => {
            return <MediaResult key={i} media={m} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};
