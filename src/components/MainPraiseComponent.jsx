import React from "react";
import Container from "react-bootstrap/Container";

const MainPraiseComponent = () => {
    return (
        <Container className="main-praise-container"> {/* text-center 클래스 추가 */}
                <p className="main-praise-content font-weight-bold"> {/* font-weight-bold 클래스 추가 */}
                    Search <br/>
                    수능AllinOne에서 듣고 싶은 강의를 찾아보세요!
                </p>
        </Container>
    );
}

export default MainPraiseComponent;
