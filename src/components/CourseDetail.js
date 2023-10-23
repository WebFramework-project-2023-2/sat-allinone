import React from 'react'
import "./CourseDetail.css"

function CourseDetail() {
    return (
        <div className='background'>
            <div className='__thumbnail'></div>
            <div className='__category' id='category'>카테고리 부분</div>
            <div className='__title' id='title'>*******강의 이름*********</div>
            <div className='__teacher' id='teacher'>현우진 선생님</div>

            <div className='__detail-1'>대상 학년 | 고3·N수</div>
            <div className='__detail-2'>강좌 구성| 각 40분씩, 총 24강</div>
            <div className='__detail-3'>제작 방식 | 동영상 스튜디오 강의</div>
            <div className='__detail-4'>강좌 유형 | 모의고사, 수능(파이널)</div>
            <div className='__detail-5'>수강 기간 | 59일 (교재배송기간포함)</div>
            <div className='__detail-6'>부가 기능 | 인덱스 자막</div>
        </div>
    )
}

export default CourseDetail