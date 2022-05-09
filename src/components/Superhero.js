import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import superheroImage from "../assets/images/superhero/superman.jpg";

export const Superhero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 >SUPERHERO MOVIE</h1>
        <br/>
        <Row>
          <Col id='superhero' md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={antmanImage} alt="dune Movies" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-left'>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={avengerImage} alt="dune Movies" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-left'>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={batmanImage} alt="dune Movies" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-left'>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={robinhoodImage} alt="dune Movies" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-left'>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={spidermanImage} alt="dune Movies" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-left'>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={superheroImage} alt="dune Movies" className='images' />
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-left'>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
                </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Superhero;