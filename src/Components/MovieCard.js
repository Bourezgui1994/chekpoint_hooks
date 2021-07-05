import React from 'react'
import { Card,Button} from 'react-bootstrap';


const MovieCard =({movie}) =>{
    return (
        <div>

        <Card className="cardMovie">
            <Card.Img variant="top" src={movie.image} height="230px" />
            <Card.Body >
                <Card.Title className="titleMovie">{movie.title}  </Card.Title>
                <h6>{movie.duration} / {movie.type}</h6>
                
                <Card.Text className="descriptionMovie">
                {movie.description}
                </Card.Text>
                <Button variant="primary" className="btnMovie"> watch</Button>
            </Card.Body>
        </Card>
            
        </div>
    )
}


export default MovieCard;
