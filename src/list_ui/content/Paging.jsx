import React, { useState } from "react";
import Pagination from "react-js-pagination";
const Paging = ({page, count, handlePageChange}) => {
    const postPerPage = 12 // 페이지 당 게시글 개수
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={12}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
    </div>
  );
};
 
export default Paging;