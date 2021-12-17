import React from 'react'
import { Card } from 'react-bootstrap'
import StarRating from 'react-star-rating';
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
    <Card.Text><StarRating name="small-rating" caption="Small!" size={30} totalStars={5} rating={Movie.rating} />
      </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard
