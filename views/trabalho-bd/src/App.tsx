import { useState } from "react";
import "./App.scss";
import { Header } from "./components/header/header.tsx";
import { Home } from "./components/home/home.tsx";
import { ModalSearch } from "./components/modalSearch/modalSearch.tsx";
import { MainContent } from "./components/mainContent/mainContent.tsx";
import { Box } from "@mui/material";


function App() {

  const [mediaTypeExibition, setMediaTypeExibition] = useState("movies");
  const [openSearch, setOpenSearch] = useState(false);
  
  const toggleMediaTypeExibition = (type: "movies" | "series") => {
    setMediaTypeExibition(type);

    console.log(type);
  };

  const handleOpenProfile = (user: string) => {
    console.log("Abrir Perfil de ", user);
  };



  return (
    <Box component="div" className="app-root">
      <Header
        
        onToggleMediaType={toggleMediaTypeExibition}
        onHandleOpenProfile={handleOpenProfile}
        onClickInputSearch={setOpenSearch}
   
      ></Header>

      <Home typeMedia={mediaTypeExibition}></Home>

      <ModalSearch openSearch={openSearch} onClickClose={setOpenSearch} />

      <MainContent typeMedia={mediaTypeExibition}/>
    </Box>
  );
}

export default App;
