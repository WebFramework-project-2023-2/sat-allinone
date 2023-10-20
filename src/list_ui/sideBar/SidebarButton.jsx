import React from "react";
import { useContext } from 'react';
import styles from '../css/Main.module.css'
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const white = 'rgba(255, 255, 255, 1)';
const BLUE = 'rgba(207, 226, 255, 1)';

export default function SidebarButton({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <div
        className={styles.navItem}
        style={{ backgroundColor: isCurrentEventKey ? BLUE : white }}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }