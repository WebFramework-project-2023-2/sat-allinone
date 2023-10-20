import React from "react";
import NavBar from "./Nav/Navbar";
import BodyBox from "./BodyBox";
import FootBox from "./FootBox";
import styles from './css/Main.module.css'

export default function Maincontainer(){
    return(
        <div className={styles.mainContainer}>
            <NavBar/>
            <BodyBox/>
            <FootBox/>
        </div>
    );
}