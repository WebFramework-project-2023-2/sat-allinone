import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import styles from "../../styles/Main.css"

const Footer = () =>{
    return (
        <footer className={`${styles.footer} bg-dark text-light`}>
            <Container style={{marginLeft : '300px'}}>
                <Row>
                    <Col md={6} className="text-center">
                        <h5>수능AllinOne</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="text-center">
                        <h6>수능AllinOne과 함께 강의 탐색을 시작하세요!</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;