import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LessonCard from './LessonCard';
import SubjectButton from "./SubjectButton";

const MiddleContainer = () => {
    const subjects = [
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "수학"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "과학"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
        {
            subjectIcon : "/assets/icons/subject_sample.png",
            subjectTitle : "언어와 매체"
        },
    ]

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={6} className="g-4 justify-content-center">
                {subjects.map((sub, index) => (
                    <Col key={index} className="mb-3">
                        <SubjectButton subjectIcon={sub.subjectIcon} subjectName={sub.subjectTitle} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MiddleContainer;
