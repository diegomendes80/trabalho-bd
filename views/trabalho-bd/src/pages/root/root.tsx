import { Box } from "@mui/material";
import { useState } from "react";
import { Header } from "../../components/header/header";
import { Home } from "../../components/home/home";
import { ModalSearch } from "../../components/modalSearch/modalSearch";
import { MainContent } from "../../components/mainContent/mainContent";
import { DashboardSection } from "../../components/dashboardSection/dashboardSection";
import { ModalLogSearch } from "../../components/modalLogSearch/modalLogSearch";
import { ModalReview } from "../../components/modalReview/modalReview";
import type { Media } from "../../types/media";

export const Root = () => {
  const [mediaTypeExibition, setMediaTypeExibition] = useState("movies");
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogSearch, setOpenLogSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [openReview, setOpenReview] = useState(false);
  const [mediaToReview, setMediaToReview] = useState<Media | null>(null);

  const handleSelectMedia = (media: Media) => {
    setMediaToReview(media);
    setOpenLogSearch(false);
    setOpenReview(true);
  };

  const toggleMediaTypeExibition = (type: "movies" | "series") => {
    setMediaTypeExibition(type);

    console.log(type);
  };

  return (
    <Box component="div" className="root">
      <Header
        onToggleMediaType={toggleMediaTypeExibition}
        onClickInputSearch={setOpenSearch}
        searchValue={searchValue}
        onChangeSearch={setSearchValue}
        onClickLog={setOpenLogSearch}
      ></Header>

      <Home typeMedia={mediaTypeExibition}></Home>

      <ModalLogSearch
        openLogSearch={openLogSearch}
        onClickClose={setOpenLogSearch}
        onSelectMedia={handleSelectMedia}
      />

      {mediaToReview && (
        <ModalReview
          openReview={openReview}
          media={mediaToReview}
          isEditing={false}
          onClickClose={setOpenReview}
        />
      )}

      <ModalSearch
        openSearch={openSearch}
        onClickClose={setOpenSearch}
        searchValue={searchValue}
        onChangeSearch={setSearchValue}
      />

      <Box component="div" className="main">
        <MainContent typeMedia={mediaTypeExibition} />
        <DashboardSection />
      </Box>
    </Box>
  );
};
