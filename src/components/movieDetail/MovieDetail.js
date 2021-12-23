import React from 'react'
// import "./MovieDetail.css"
const MovieDetail = ({match,movieData}) => {
   
    const movie= movieData.find(elt=> elt.id == match.params.id)
    
  return (
    <div>
          <h3> {movie.title} </h3>
         <img src={movie.posterUrl} alt=""
         height="350"
         width="450" />
         <p> {movie.description} </p>
         <p> {movie.rating} </p>
         <video src={movie.src} 
         height="400"
         width="500"/>
    
    </div>
  )
}

export default MovieDetail
