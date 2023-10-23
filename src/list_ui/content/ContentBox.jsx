import React, { useEffect, useState } from "react";
import styles from '../css/Main.module.css'
import ContentList from "./ContentList.";
import Paging from "./Paging";
export default function ContentBox({title}){
    const [lecture, setLecture] = useState([]);
    const [filterLecture, setFilterLecture] = useState([]);
    const [page, setPage] = useState(1);
    const [currentPost, setCurrentPost] = useState([]);

    const postPerPage = 12 // 페이지 당 게시글 개수
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const handlePageChange = (page) => {
        setPage(page)
      }

    useEffect(()=>{
        fetch(`data/lecture.json`)
        .then((res) => res.json())
        .then((data)=>{
            setLecture(data);
            setFilterLecture(data.filter((value) => value.subject === title))
            setCurrentPost(filterLecture.slice(indexOfFirstPost, indexOfLastPost))
        })
        
    },[title, page])
    // useEffect(()=>{
    //     console.log("Sdf")
    //     setCurrentPost(filterLecture.slice(indexOfFirstPost, indexOfLastPost))
    // },[title, page])
    useEffect(() => {
        setCurrentPost(filterLecture.slice(indexOfFirstPost, indexOfLastPost));
    }, [filterLecture, page]);
    return (
        <>
        <div className={styles.contentBox}>
            <h2>{title}</h2>
            <h6>{`${filterLecture.length}의 결과가 있습니다.`}</h6>
            <div style={{height:50}}/>
            <ContentList currentPost={currentPost}/>
            <Paging style={styles.pagination} page = {page} count={filterLecture.length} handlePageChange={handlePageChange}/>
        </div>
        
        </>
        
    );
}