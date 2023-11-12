// App.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AutoSlideCarousel = () => {
    return (
        <Carousel className="auto-slide-carousel" interval={3000} controls={false}> {/* 간격을 3초(3000밀리초)로 설정 */}
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="/assets/images/ex_slide_img1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="/assets/images/ex_slide_img2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="/assets/images/ex_slide_img3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default AutoSlideCarousel;
