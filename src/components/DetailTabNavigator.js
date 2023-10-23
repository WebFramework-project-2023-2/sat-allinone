import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import './DetailTabNavigator.css'
import LectureDetail from './detailTabComponents/LectureDetail';
import LectureIndex from './detailTabComponents/LectureIndex';
import LectureTextbook from './detailTabComponents/LectureTextbook';
import LectureReview from './detailTabComponents/LectureReview';


function DetailTabNavigator() {
    const [tab, setTab] = useState(1);

    function TabContent(props) {
        if (props.tab === 1) return <LectureDetail />
        else if (props.tab === 2) return <LectureIndex />
        else if (props.tab === 3) return <LectureTextbook />
        else if (props.tab === 4) return <LectureReview />
    }

    return (
        <div className='__DetailTabNavigator'>
            <Nav variant="underline" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>강좌정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>강의목차</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={() => setTab(3)}>
                        교재정보
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" onClick={() => setTab(4)}>
                        수강평
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <div className='__tabContent'>
                <TabContent tab={tab} />
            </div>
        </div>
    )
}

export default DetailTabNavigator