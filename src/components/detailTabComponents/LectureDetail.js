import React from 'react'
import "./LectureDetail.css"
import lectureInfo from '../../data/lectureInformation.json'

function LectureDetail() {
    const currentLecture = lectureInfo[0];
    return (
        <table border="1">
            <tr>
                <td className='__table-column'>강좌 범위</td>
                <td>{currentLecture.scope}</td>
            </tr>
            <tr>
                <td className='__table-column'>내용 및 특징</td>
                <td>{
                    currentLecture.content.split('\n').map(line => (
                        <span>{line}<br /><br /></span>
                    ))
                }</td>
            </tr>
            <tr>
                <td className='__table-column'>수강 대상</td>
                <td>{
                    currentLecture.target.split('\n').map(line => (
                        <span>{line}<br /></span>
                    ))
                }</td>
            </tr>
        </table>
    )
}

export default LectureDetail