import React from "react";
import styles from '../css/Main.module.css'
import Accordion from 'react-bootstrap/Accordion';
import SidebarButton from "./SidebarButton";


export default function Sidebar(){
    return(
        <div>
            <Accordion defaultActiveKey="0">
                <SidebarButton eventKey='0'>
                        전체
                </SidebarButton>
                <SidebarButton eventKey='1'>
                        국어
                </SidebarButton>
                <SidebarButton eventKey='2'>
                        수학
                </SidebarButton>
                <SidebarButton eventKey='3'>
                        영어
                </SidebarButton>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>사회</Accordion.Header>
                    <Accordion.Body>
                            
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>과학</Accordion.Header>
                    <Accordion.Body>
                            
                    </Accordion.Body>
                </Accordion.Item>
                <SidebarButton eventKey='6'>
                        한국사
                </SidebarButton>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>제2 외국어</Accordion.Header>
                    <Accordion.Body>
                            
                    </Accordion.Body>
                </Accordion.Item>
        
            </Accordion>
        </div>
            
    );
}