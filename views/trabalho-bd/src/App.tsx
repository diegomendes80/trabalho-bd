import { useState } from "react";

import { Header } from "./components/header/header.tsx";

function App() {
  const [theme, setTheme] = useState("dark");
  const [mediaTypeExibition, setMediaTypeExibition] = useState("movies");

  const toggleMediaTypeExibition = (type: "movies" | "series") => {
    setMediaTypeExibition(type);

    console.log(type);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", newTheme);

      return newTheme;
    });
  };

  return (
    <>
      <Header onToggleTheme={toggleTheme} onToggleMediaType={toggleMediaTypeExibition}></Header>
    </>
  );
}

export default App;
