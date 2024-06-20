import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import MovieRow from './components/MovieRow';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    axios.get('http://cw-api.eu-west-3.elasticbeanstalk.com/movied/discover')
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterTerm.toLowerCase());
  });

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div><h1>Home</h1><MovieRow movies={movies} title="Latest Movies" /></div>} />
        <Route path="/tv-shows" element={<div><h1>TV Shows</h1><MovieRow movies={movies} title="Latest TV Shows" /></div>} />
        <Route path="/movies" element={<div><h1>Movies</h1><MovieRow movies={movies} title="Latest Movies" /></div>} />
        <Route path="/kids" element={<div><h1>Kids</h1><MovieRow movies={filteredMovies} title="Kids Movies" /></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;