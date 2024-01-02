import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Category from "./Components/Category";
import Notesnews from "./Components/Notesnews";
import Movies from "./Components/Movies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/notesnews" element={<Notesnews />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
