import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


import Home from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Home /> */}
    //   </Routes>
    // </BrowserRouter>

    <section className="h-screen w-full bg-red-600">
      <Home />
    </section>
  );
}

export default App;
