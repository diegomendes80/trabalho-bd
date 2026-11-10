import "./modalLogSearch.scss";
import { Box, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { SearchInput } from "../UI/searchInput/searchInput";
import CloseIcon from "@mui/icons-material/Close";
import type { Media } from "../../types/media";
import { getMovie } from "../../services/movies";
import { MediaResult } from "../UI/mediaResult/mediaResult";

interface ModalLogSearchProps {
  openLogSearch: boolean;
  onClickClose: (close: boolean) => void;
  onSelectMedia: (media: Media) => void;
}

export const ModalLogSearch = ({
  openLogSearch,
  onClickClose,
  onSelectMedia,
}: ModalLogSearchProps) => {
  const [medias, setMedias] = useState<Media[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!openLogSearch) return;

    const el = inputRef.current;
    el?.focus();
    el?.setSelectionRange(el.value.length, el.value.length);
  }, [openLogSearch]);

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
      component={"div"}
      className={`modal-log-search-container ${openLogSearch == false ? "disable" : ""}`}
    >
      <Box component={"div"} className="modal-log-search-root">
        <Box component="div" className="log-search__close">
          <CloseIcon
            className="close-icon"
            fontSize="small"
            onClick={() => onClickClose(false)}
          />
        </Box>

        <Box component={"div"} className="log-search__header">
          <Typography variant="h3" className="header__title">
            Nova resenha
          </Typography>
          <Typography variant="body1" className="header__subtitle">
            Escolha o título que você quer resenhar
          </Typography>
        </Box>

        <SearchInput
          placeholder="Qual título você quer resenhar?"
          inputRef={inputRef}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <Box component={"div"} className="log-search__media-results">
          {medias.map((m, i) => {
            return (
              <MediaResult
                key={i}
                media={m}
                onClick={() => {
                  onSelectMedia(m);
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
