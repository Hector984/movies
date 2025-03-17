import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from '@mui/joy/Button';
import api from './api/axiosConfig';
import Layout from './assets/components/Layout';
import Home from './assets/components/home/Home';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try{

      const response = await api.get('/movies');

      setMovies(response.data);
    }catch(error) {
      console.log(error);
    }
  }

  // The code inside runs only when thw page loads for the first time
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
