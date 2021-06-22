import React from 'react'
import { Card,Button} from 'react-bootstrap';


const MovieCard =({movie}) =>{
    return (
        <div>

        <Card className="cardMovie">
            <Card.Img variant="top" src={movie.image} height="230px" />
            <Card.Body>
                <Card.Title>{movie.title} rating:{movie.rating} </Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                <Button variant="primary"> watch</Button>
            </Card.Body>
        </Card>
            
        </div>
    )
}


export default MovieCard;
