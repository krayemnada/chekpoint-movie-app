import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({Movie}) => {
  console.log(Movie)

  return (
   
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Movie.posterUrl}/>
  <Card.Body>
    <Card.Title>{Movie.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Text><StarRatingComponent
                        name="rate"
                        editing={false}
                        starCount={5}
                        value={Movie.rating}
                    />
      </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard
