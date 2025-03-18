import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/axiosConfig";
import Header from "./assets/components/header/Header";
import Layout from "./assets/components/Layout";
import Home from "./assets/components/home/Home";
import Movie from "./assets/components/detail/movie";

function App() {
  const [movies, setMovies] = useState([]);

  // The code inside runs only when thw page loads for the first time
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await api.get("/movies");
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/:id" element={<Movie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
