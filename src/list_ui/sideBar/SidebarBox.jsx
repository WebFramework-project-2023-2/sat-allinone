import React from "react";
import styles from '../css/Main.module.css'
import Sidebar from "./Sidebar";



export default function SidebarBox({setTitle}){
    return(
        <div className={styles.sidebarBox}>
            <Sidebar setTitle = {setTitle}/>
        </div>
    );
}