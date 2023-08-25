import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MovieList from "./pages/movies/MovieList";
import MovieDetails from "./pages/movies/MovieDetails";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import HomeIcon from "@mui/icons-material/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movies" Component={MovieList} />
        <Route path="/movie/:id" Component={MovieDetails} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
    </Router>
  );
}

export default App;
