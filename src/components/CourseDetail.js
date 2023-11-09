import React from 'react'
import "./CourseDetail.css"
import lectureDetail from '../data/lectureDetail.json'

function CourseDetail() {
    const firstCourse = lectureDetail[0];
    let id = firstCourse.id;
    const thumbnailImage = require(`../assets/${id}.png`);

    return (
        <div className='background'>
            <div>
                <img src={thumbnailImage} alt="NO_IMAGE" className='__thumbnail'/>
            </div>
            <div className='__category' id='category'>{firstCourse.category}</div>
            <div className='__title' id='title'>{firstCourse.title}</div>
            <div className='__teacher' id='teacher'>{firstCourse.teacher}</div>

            <div className='__detail-1'>대상 학년 | {firstCourse.grade}</div>
            <div className='__detail-2'>강좌 구성 | {firstCourse.structure}</div>
            <div className='__detail-3'>제작 방식 | {firstCourse.productionMethod}</div>
            <div className='__detail-4'>강좌 유형 | {firstCourse.type}</div>
            <div className='__detail-5'>수강 기간 | {firstCourse.duration}</div>
            <div className='__detail-6'>부가 기능 | {firstCourse.additional}</div>
        </div>
    )
}

export default CourseDetail