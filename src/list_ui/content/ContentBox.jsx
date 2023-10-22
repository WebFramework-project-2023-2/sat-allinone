import React, { useEffect, useState } from "react";
import styles from '../css/Main.module.css'
import ContentList from "./ContentList.";
export default function ContentBox({title}){
    const [lecture, setLecture] = useState([]);
    const [filterLecture, setFilterLecture] = useState([])
    useEffect(()=>{
        fetch(`data/lecture.json`)
        .then((res) => res.json())
        .then((data)=>{
            setLecture(data);
            setFilterLecture(data.filter((value) => value.subject === title))
        })
    },[title])
    return (
        <>
        <div className={styles.contentBox}>
            <h2>{title}</h2>
            <h6>{`${filterLecture.length}의 결과가 있습니다.`}</h6>
            <div style={{height:50}}/>
            <ContentList filterLecture={filterLecture}/>
        </div>
        
        </>
        
    );
}