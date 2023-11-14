import React from "react";
import Navbar from "react-bootstrap/Navbar";
import MainPraiseComponent from "./MainPraiseComponent";
import Container from "react-bootstrap/Container";
import Footer from "./footer/Footer";
import RecommendedContainer from "./RecommendedContainer";
import NavBar from "./navbar/NavBar";
import MiddleContainer from "./MiddleContainer";
import SearchBar from "./SearchBar";
import Banner from "./Banner";

const MainContainer = () => {
    return (
        <Container style={{ paddingBottom: "100px", position: "relative" }}>
            {/* paddingBottom 값은 footer의 높이와 같아야 합니다. */}
            <NavBar />
            <div className="wrapper">
                <div>
                    <MainPraiseComponent />
                    <SearchBar />
                    <MiddleContainer />
                    <Banner />
                    <RecommendedContainer />
                </div>
            </div>
            <Footer/>
        </Container>
    );
}

export default MainContainer;
