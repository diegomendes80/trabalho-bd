import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Root } from "./pages/root/root.tsx";
import { Profile } from "./pages/profile/profile.tsx";
import { Box } from "@mui/material";


function App() {
  return (
    <Box component="div" className="app-root">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Box>
  );
}

export default App;