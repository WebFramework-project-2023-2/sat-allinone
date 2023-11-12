import React from "react";

const RecommendedText = ({username}) => {
    return (
        <div className="recommended-text-container">
            <p className="recommended-text-title">추천 강의</p>
            <p className="recommended-text-content">{username} 님을 위한 강의를 모아놨어요!</p>
        </div>
    )
}

export default RecommendedText;