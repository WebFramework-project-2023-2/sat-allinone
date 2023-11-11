import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const LessonCard = ({ thumbnail, title, teacher }) => {
    return (
        <Card>
            <Row className="g-0">
                <Col md={4}>
                    <Card.Img src={thumbnail} alt={title} className="w-100 h-100" />
                </Col>

                <Col md={8}>
                    <Card.Body>
                        <Card.Text className="text-muted mb-2">{teacher}</Card.Text>
                        <Card.Title className="fw-bold">{title}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default LessonCard;
