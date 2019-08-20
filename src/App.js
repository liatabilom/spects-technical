import React from "react";
import Header from "./Header";
import ClothingDisplay from "./ClothingDisplay";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="container mainContainer mt-3">
      <Header />
      <ClothingDisplay />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
