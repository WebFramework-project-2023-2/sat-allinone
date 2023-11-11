// src/components/LessonList.js
import React from 'react';
import LessonCard from './LessonCard';

const LessonList = () => {
    const lessons = [
        {
            id: 1,
            thumbnail: '/assets/images/Rectangle 31.png',
            title: '리액트 기초 강의',
            teacher: '현우진'
        },
        {
            id: 2,
            thumbnail: '/assets/images/Rectangle 32.png',
            title: '리덕스 입문 강의',
            teacher: '조정식'
        },
        {
            id: 3,
            thumbnail: '/assets/images/Rectangle 33.png',
            title: 'react-bootstrap 입문 강의',
            teacher: '김동욱'
        }

    ];

    return (
        <div className="lesson-list">
            {lessons.map((lesson) => (
                <LessonCard key={lesson.id} thumbnail={lesson.thumbnail} title={lesson.title}
                teacher={lesson.teacher}/>
            ))}
        </div>
    );
};

export default LessonList;
