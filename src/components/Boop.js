import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Boop(props) {

    return(
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="strike">{props.title}</h1> }
                        { props.subTitle && <h3 className='display-10 font-weight-light'>{props.subTitle}</h3> }
                        { props.text && <h3 className='lead font-weight-light'>{props.text}</h3> }

                        <div class="area p-0" >
                            <ul class="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                            </ul>
                        </div >
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Boop;