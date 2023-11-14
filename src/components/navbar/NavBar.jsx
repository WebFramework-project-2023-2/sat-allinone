import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {PATH} from "../../constants/path";
import {Button} from "react-bootstrap";
import styles from "../../styles/Main.css"

const NavBar =()=> {
    return (
        <Navbar expand="lg" className={`${styles.nav} bg-body-tertiary justify-content-between`}>
            <Container>
                <Navbar.Brand href={PATH.HOME}>수능AllinOne</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={PATH.LECTURE_LIST}>강의</Nav.Link>
                        <Nav.Link href={PATH.RECOMMENDED_LECTURE}>추천 강의</Nav.Link>
                        <Nav.Link href={PATH.BOOKMARKED_LECTURE}>찜한 강의</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button type="submit">로그인</Button>
            </Container>
        </Navbar>
    );
}

export default NavBar;