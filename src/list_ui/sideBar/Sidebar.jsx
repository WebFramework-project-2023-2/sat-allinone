import React from "react";
import styles from '../css/Main.module.css'
import Accordion from 'react-bootstrap/Accordion';
import SidebarButton from "./SidebarButton";
import Card from 'react-bootstrap/Card';

export default function Sidebar(){
    return(
        <div>
            <div style={{height:50}}>
            </div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='0'>
                            전체
                        </SidebarButton>
                    </Card.Header>
                </Card>
                
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='1'>
                            국어
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='2'>
                            수학
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='3'>
                            영어
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='4'>
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
                        <SidebarButton eventKey='5'>
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
                        <SidebarButton eventKey='6'>
                            한국사
                        </SidebarButton>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header style={{padding:0}}>
                        <SidebarButton eventKey='7'>
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