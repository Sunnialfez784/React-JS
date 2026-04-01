import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
