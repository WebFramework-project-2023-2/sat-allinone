import React from "react";
import { useContext } from 'react';
import styles from '../css/Main.module.css'
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const white = 'rgba(255, 255, 255, 1)';
const BLUE = 'rgba(207, 226, 255, 1)';

export default function SidebarButton({ children, eventKey, setTitle, callback} ) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const cardOnclick = (children)=>{
        setTitle(children)
    }

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        
        <div
            className={styles.navItem}
            style={{ backgroundColor: isCurrentEventKey ? BLUE : white }}
            onClick={()=>{cardOnclick(children); decoratedOnClick()}}
        >
            {children}
        </div>
        
    );
}