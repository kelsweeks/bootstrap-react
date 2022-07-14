import React from 'react';
import TopOfSite from './TopOfSite';
//import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';

function App() {
//   const [movies, setMovies] = useState([])
//   const [search, setSearch] = useState("")

//   function fetchMovies() {
//     fetchMovies("http://localhost:3000/movies")
//       .then((res)=>res.json())
//       .then((moviesData)=> setMovies(moviesData))
//   }
//   useEffect(fetchMovies, [])

//   const filteredMovies = movies.filter(
//     (movie) => movie.name.toLowerCase().includes(search.toLowerCase()) || movies.description.toLowerCase().includes(search.toLowerCase())
// )

  return (
    <div className="App">
      <TopOfSite />
      {/* <MoviesContainer movies={filteredMovies} /> */}
    </div>
  )
}  

export default App;
