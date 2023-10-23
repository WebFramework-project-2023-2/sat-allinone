
import { useState } from 'react';
import ContentBox from './content/ContentBox';
import styles from './css/Main.module.css'
import SidebarBox from "./sideBar/SidebarBox";


export default function BodyBox() {
  const [title, setTitle] = useState("전체");
  return (
    <div className={styles.bodyBox}>
        <SidebarBox setTitle={setTitle}/>
        <ContentBox title={title}/>
    
    </div>
  );
}

