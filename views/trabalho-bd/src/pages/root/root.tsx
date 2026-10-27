import { Box } from "@mui/material";
import { useState } from "react";
import { Header } from "../../components/header/header";
import { Home } from "../../components/home/home";
import { ModalSearch } from "../../components/modalSearch/modalSearch";
import { MainContent } from "../../components/mainContent/mainContent";
import { DashboardSection } from "../../components/dashboardSection/dashboardSection";
import { useNavigate } from "react-router-dom";

export const Root = () => {
  const [mediaTypeExibition, setMediaTypeExibition] = useState("movies");
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const toggleMediaTypeExibition = (type: "movies" | "series") => {
    setMediaTypeExibition(type);

    console.log(type);
  };

  const handleOpenProfile = () => {
    navigate("/profile");
  };

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <Box component="div" className="root">
      <Header
        onToggleMediaType={toggleMediaTypeExibition}
        onClickProfile={handleOpenProfile}
        onClickInputSearch={setOpenSearch}
        onClickLogo={handleClickLogo}
        searchValue={searchValue}
        onChangeSearch={setSearchValue}
      ></Header>

      <Home typeMedia={mediaTypeExibition}></Home>

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
