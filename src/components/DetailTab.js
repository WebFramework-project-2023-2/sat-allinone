import React from 'react'
import DetailTabNavigator from './DetailTabNavigator'
import LectureEnrollment from './LectureEnrollment'
import './DetailTab.css'

function DetailTab() {
    return (
        <div className='__detailTab'>
            <DetailTabNavigator />
            <LectureEnrollment />
        </div>
    )
}

export default DetailTab