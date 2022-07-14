import React from 'react';
import { useState } from 'react'
import { Card } from 'react-bootstrap'

function Movie({movie}) {
    const { name, director, year, description, starring, pictureUrl, genre } = movie
    const [showDescription, setShowDescription] = useState(true)

    function handleClick() {
        setShowDescription((prevState) =>!prevState)
    }

    return (
        <div className="movie-card container">
        <Card className="mb-3" style={{color: "#000"}}>
            <Card.Img src={pictureUrl} className="img-fluid" onClick={handleClick} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{director}</Card.Subtitle>
                <Card.Text>{showDescription ? description : starring}</Card.Text>
                <p>{year}</p>
                <p>{genre}</p>
            </Card.Body>
        </Card>
        </div>
        // <div className="card">
        // <div className="carddetails">
        //     <img src={pictureUrl} className="img-fluid" onClick={handleClick} />
        //     <div className="cardinfo">
        //         <div className="featuretitle">{name}</div>
        //         <p>{director}</p>
        //         <p className="cardtextbox">{showDescription ? description : starring}</p>
        //         <div className="carddetail">
        //             <p>{year}</p>
        //             <p>{genre}</p>
        //         </div>
        //     </div>
        // </div>
        // </div>
    )
}
export default Movie

// this is the component that holds the info from the db.json file