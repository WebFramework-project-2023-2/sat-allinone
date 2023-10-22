import React from "react";
import styles from '../css/Main.module.css'
import Accordion from 'react-bootstrap/Accordion';
import SidebarButton from "./SidebarButton";
import Card from 'react-bootstrap/Card';

export default function Sidebar({setTitle}){
    return(
        <div>
            <div style={{height:100}}>
            </div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='0' setTitle = {setTitle}>
                            전체
                        </SidebarButton>
                    </Card.Header>
                </Card>
                
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='1' setTitle = {setTitle}>
                            국어
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='2' setTitle = {setTitle}>
                            수학
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='3' setTitle = {setTitle}>
                            영어
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='4' setTitle = {setTitle}>
                            사회
                        </SidebarButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            지리
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='5' setTitle = {setTitle}>
                            과학
                        </SidebarButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            물리
                            화학
                            생명과학
                            지구과학
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='6' setTitle = {setTitle}>
                            한국사
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='7' setTitle = {setTitle}>
                            제2 외국어
                        </SidebarButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            베트남어
                            아랍어
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
        
            </Accordion>
        </div>
            
    );
}