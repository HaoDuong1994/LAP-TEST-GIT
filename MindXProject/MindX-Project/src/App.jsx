import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header/Header";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
function App() {
  useEffect(() => {
    document.title = "Shop quần áo";
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
