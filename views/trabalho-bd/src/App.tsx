import { useState } from "react";
import "./App.scss";
import { Header } from "./components/header/header.tsx";
import { Home } from "./components/home/home.tsx";
import { ModalSearch } from "./components/modalSearch/modalSearch.tsx";
import { Box } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("dark");
  const [mediaTypeExibition, setMediaTypeExibition] = useState("movies");

  const toggleMediaTypeExibition = (type: "movies" | "series") => {
    setMediaTypeExibition(type);

    console.log(type);
  };

  const handleOpenProfile = (user: string) => {
    console.log("Abrir Perfil de ", user);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", newTheme);

      return newTheme;
    });
  };

  return (
    <Box component="div" className="app-root">
      <Header
        onToggleTheme={toggleTheme}
        onToggleMediaType={toggleMediaTypeExibition}
        onHandleOpenProfile={handleOpenProfile}
      ></Header>

      <Home typeMedia={mediaTypeExibition}></Home>

      <ModalSearch />
    </Box>
  );
}

export default App;
