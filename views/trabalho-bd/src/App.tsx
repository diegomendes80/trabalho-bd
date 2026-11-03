import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Root } from "./pages/root/root.tsx";
import { ScrollTop } from "./components/UI/scrollTop/scrollTop.tsx";
import { Profile } from "./pages/profile/profile.tsx";
import { MediaPage } from "./pages/media/mediaPage.tsx";
import { Box } from "@mui/material";


function App() {
  return (
    <Box component="div" className="app-root">

      <ScrollTop/>
      
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/media/:name" element={<MediaPage/>}/>
      </Routes>
    </Box>
  );
}

export default App;