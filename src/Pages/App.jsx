import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import { Box } from "@chakra-ui/react";
import GetStarted from "./GetStarted";
import Neumhorphisme from "./Neumhorphisme";
import Glassmhorphisme from "./Glassmhorphisme";
import Gradient from "./Gradient";
import GeoArt from "./GeoArt";
import BgPattern from "./BgPattern";
import BlobMaker from "./BlobMaker";
import { ThemeProvider } from "@chakra-ui/react";

function App() {
  return (
    // <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/neu" element={<Neumhorphisme />} />
        <Route path="/glass" element={<Glassmhorphisme />} />
        <Route path="/gradient" element={<Gradient />} />
        <Route path="/geo-art" element={<GeoArt />} />
        <Route path="/bg-pattern" element={<BgPattern />} />
        <Route path="/blob-maker" element={<BlobMaker />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
