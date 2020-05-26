import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Resume extends React.Component {

    render()  {


        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    <object data='myresume.pdf' type="application/pdf" width='750' height='1020'>My Resume Displayed</object>
                </Row>
            </Container>

        );
    }
}

export default Resume;