import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const SearchBar = () => {
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('search button clicked');
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="mx-auto mt-4">
                    <Form className="d-flex searchBar">
                        <Form.Group controlId="searchForm">
                            <Form.Control className="flex-grow-0 h-100" type="text" placeholder="검색어를 입력하세요" />
                        </Form.Group>
                        <Button  className="searchButton flex-grow-0" variant="primary" type="submit" onClick={handleSearch}>
                            <img className="searchButtonIcon" src={require("../assets/icons/search_icon.png")} alt="search icon" />
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
