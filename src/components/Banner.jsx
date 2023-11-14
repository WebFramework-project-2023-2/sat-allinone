import React from 'react';
import RoundImage from "./RoundImage"; // 파일 확장자 확인

const Banner = () => {
    const images = [
        "/assets/images/ebs.png",
        "/assets/images/etoos.png",
        "/assets/images/mega_study.png"
    ];

    return (
        <div className="banner">
            {images.map((image, i) => <RoundImage key={i} imageUrl={image}/> )}
            <div>
                총 20,000개의 강의를 한 번에 비교하세요.
            </div>
        </div>
    );
}

export default Banner;
