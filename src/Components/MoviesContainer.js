import React from 'react'
//import MovieCards from "./MovieCards"
import Movie from './Movie'
import { Container } from 'react-bootstrap'

function MoviesContainer({movies}) {
    const renderMovies = movies.map((movie) => (
        <Movie movie={movie} />
    ))
    return (
        <Container>
            {renderMovies}
        </Container>
    )
}
export default MoviesContainer

//MoviesContainer is the section on the page essentially that holds all the movie cards 
// MoviesContainer should include the Movie Cards