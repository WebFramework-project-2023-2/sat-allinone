import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../css/Main.module.css';
import Paging from './Paging';
export default function ContentList({ currentPost }) {
  
  return (
    <>
      <Row>
      {currentPost.map((lecture, index) => (
        <>
        
         <Col ms = {3} key={index}>
          <Card style={{ width: '14rem', margin: '1rem' }}>
            <Card.Img variant="top" src={lecture.img} />
            <Card.Body>
              <Card.Title>{lecture.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          
        </>
      ))}
      
      </Row>
      
    </>
  );
}
