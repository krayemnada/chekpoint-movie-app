import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./MovieDetail.css"
import ReactStars from "react-rating-stars-component";
const MovieDetail = ({match,movieData}) => {
   
    const movie= movieData.find(elt=> elt.id == match.params.id)
    console.log(match.params.id)
  return (
    <div >

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" style={{color:"orange", fontSize:"35px",marginRight:"10px"}}><strong>Nate TV</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Log In</Nav.Link>
      <Nav.Link href="#pricing">Serie</Nav.Link>
      <NavDropdown title="Movies" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Romantic</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Animation</NavDropdown.Item>
          <NavDropdown.Item href="#action4">History</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Family</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Sports</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Fiction</NavDropdown.Item>
          <NavDropdown.Item href="#action4">imagination</NavDropdown.Item>
          <NavDropdown.Item href="#action4">vagueness</NavDropdown.Item>
          <NavDropdown.Item href="#action4">CV</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Music</NavDropdown.Item>
          <NavDropdown.Item href="#action4">War</NavDropdown.Item>
          <NavDropdown.Item href="#action4">crime</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Adventure</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Documentary</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
<img src="http://www.tekiano.com/wp-content/uploads/2016/01/amigos2.jpg" alt=""
         height="500px"
         width="100%"/>
         <div></div>
          <h3 style={{color:"orange",marginRight:"1300px",padding:"10px"}}> {movie.title} </h3>

        <img style={{marginRight:"1300px",padding:'10px',paddingBottom:"20px"}}src={movie.posterUrl} alt=""
         height="350"
         width="450" />
         <p style={{color:"white",marginRight:"1300px",padding:'10px',paddingBottom:"10px"}}> {movie.description} </p>
         <p style={{color:"white",marginRight:"1300px"}}><strong>Type :</strong> {movie.type}</p>
         <p style={{marginLeft:"180px"}}><ReactStars
    count={movie.rating}
    // onChange={ratingChanged}
    edit ={false}
    size={24}
    activeColor="#ffff00"
    color="#ffd700"
  /> </p>
  <div className='alt'>
      
         <div style={{marginRight:'1300px'}}>
             <h4 style={{color:"orange"}}>trailler Of This Movie</h4>
         <iframe width="653" height="380" src={movie.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
         <input type="button" class="butto" value="Download Movie"/>
<br/>
<input type="button" class="butto" value="   Watch Movie   "/>
</div>

        
         <Link to="/"><Button variant="primary" className='butt'style={{color:"orange",margin:"50px"}} >Go Back Home</Button></Link>
    </div>
  )
}

export default MovieDetail
