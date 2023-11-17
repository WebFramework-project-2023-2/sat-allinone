import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LessonCard from './LessonCard';
import SubjectButton from "./SubjectButton";

const MiddleContainer = () => {
    const subjects = [
        {
            subjectIcon : "/assets/icons/language.png",
            subjectTitle : "국어"
        },
        {
            subjectIcon : "/assets/icons/Sine.png",
            subjectTitle : "수학"
        },
        {
            subjectIcon : "/assets/icons/Brick.png",
            subjectTitle : "영어"
        },
        {
            subjectIcon : "/assets/icons/Collaboration.png",
            subjectTitle : "사회"
        },
        {
            subjectIcon : "/assets/icons/science.png",
            subjectTitle : "과학"
        },
        {
            subjectIcon : "/assets/icons/Scroll.png",
            subjectTitle : "한국사"
        },
        {
            subjectIcon : "/assets/icons/English to Arabic.png",
            subjectTitle : "제2외국어"
        },
        {
            subjectIcon : "/assets/icons/Statistics.png",
            subjectTitle : "전체"
        },
    ]

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={6} className="g-4 justify-content-center">
                {subjects.map((sub, index) => (
                    <Col key={index} className='mb-3'>
                        <SubjectButton subjectIcon={sub.subjectIcon} subjectName={sub.subjectTitle} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MiddleContainer;
