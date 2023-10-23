import React from 'react'
import './LectureEnrollment.css'
function LectureEnrollment() {
    return (
        <div className='__enrollmentBox'>
            <div className='__lecture'>강의</div>
            <div className='__lecture-price'>63,000</div>
            <div className='__textbook'>교재</div>
            <div className='__textbook-price'>69,000</div>
            <button className='__signUp'>수강하기</button>
            <button className='__saveLecture'>찜 하기</button>
        </div>
    )
}

export default LectureEnrollment