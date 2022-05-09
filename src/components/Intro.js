import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "../style/landingPage.css"
export const Intro = () => {
    return (
        <div><div className='intro'>
            <Container className='text-white text-center d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <div className='title'>Nonton Gratis </div>
                        <div className='title'> ngga pake Karcis</div>
                    </Col>
                </Row>
            </Container>
        </div></div>
    )
}

export default Intro;