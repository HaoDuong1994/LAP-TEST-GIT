import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonPage from "./Page/PokemonPage";
import PokemonDetailPage from "./Page/PokemonDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PokemonPage />} />
          <Route path="/pokemon/:pokemonID" element={<PokemonDetailPage />} />
        </Routes>
      </Router>
      {/* <PokemonPage />
      <PokemonDetailPage /> */}
    </>
  );
}

export default App;
