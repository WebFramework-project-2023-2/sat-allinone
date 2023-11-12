import React from "react";
import RecommendedText from "./navbar/RecommendedText";
import LectureListButton from "./LectureListButton";
import Container from "react-bootstrap/Container";
import AutoSlidCarousel from "./AutoSlidCarousel";
import LessonList from "./LessonList";
import {Col, Row} from "react-bootstrap";

const RecommendedContainer = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <RecommendedText username={"minjae-An"}/>
                </Col>
                <Col className="d-flex justify-content-end">
                    <div className="ml-auto">
                        <LectureListButton />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AutoSlidCarousel />
                </Col>
                <Col>
                    <LessonList />
                </Col>
            </Row>
        </Container>
    );
}

export default RecommendedContainer;
