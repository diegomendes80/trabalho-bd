import { useState } from 'react'

import { Header } from "./components/header/header.tsx";

function App() {
  const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
    setTheme((prevTheme) => {
        const newTheme = prevTheme === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);

        return newTheme;
    });
};


  return (
   
    <>
      <Header onToggleTheme={toggleTheme}></Header>
    
    </>
      
   
  )
}

export default App
