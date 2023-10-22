import React from 'react';
import Nav from "../../components/Nav";
import CourseDetail from '../../components/CourseDetail';
import "./index.css";

function index() {
    return (
        <div className='__detailpage'>
            <Nav />
            <CourseDetail />
        </div>
    )
}

export default index