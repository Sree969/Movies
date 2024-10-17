//API Key: 700cf67663fb16ff8148b3d042bbe472
//url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
// api url: https://api.themoviedb.org/3/trending/movie/day?&api_key={API Key}&language=en-US
// url to make the img : {`https://image.tmdb.org/t/p/original/${x.backdrop_path`}

// Search & Query: https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=700cf67663fb16ff8148b3d042bbe472

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import '../index.css'
const GetMovies = () => {
    let [api,setApi]=useState([]);
    useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=700cf67663fb16ff8148b3d042bbe472&language=en-US").then(x=>x.json()).then(x=>setApi(x.results)).catch(e=>console.log("Api failed"))
},[]);
// console.log(api);

let [search,setSearch]=useState("");
function movieSearch(){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=700cf67663fb16ff8148b3d042bbe472`).then(x=>x.json()).then(x=>setApi(x.results)).catch(e=>console.log("Api failed",e))
}

let navigate=useNavigate();


  return (
    <div>
        {/* Navbar */}
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">MovieWorld</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Dashboard</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Drama
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Top Rated
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            //   value={search}
              onChange={(e)=>setSearch(e.target.value)}

            />
            <Button onClick={movieSearch} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Carousel */}
    <Carousel>
        {api.map((x,y)=>{
            return(
                <div key={y}>
                    <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} alt="" />
                    <div className='legend'>
                    <p>{x.title}</p>
                    <p>{x.overview}</p>
                    <p>{x.vote_average}</p>
                    </div>
                </div>
            )
        })}
        </Carousel>

        {/* Cards */}
        <section style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between', alignItems: 'center'}}>
            {api.map((cards,cardss)=>{
                return(
                    <Card key={cardss} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
                    <Card.Body>
                        <Card.Title>{cards.title}</Card.Title>
                        <Card.Text>{cards.overview}</Card.Text>
                        <Button onClick={()=>navigate("/partmovie",{state:{cards}})} variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                )
            })}
        </section>
    </div>
  )
}

export default GetMovies