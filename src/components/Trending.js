import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

export const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 >TRENDING MOVIE</h1>
        <br/>
        <Row>
          <Col id='tranding' md={4} className='movie-wrapper'>
            <Card className="movie-image" >
              <Image src={duneImage} alt="dune Movies" className='images' />
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
              <Image src={everythingImage} alt="dune Movies" className='images' />
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
              <Image src={infiniteImage} alt="dune Movies" className='images' />
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
              <Image src={jokerImage} alt="dune Movies" className='images' />
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
              <Image src={lightyearImage} alt="dune Movies" className='images' />
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
              <Image src={morbiusImage} alt="dune Movies" className='images' />
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

export default Trending;