
import ContentBox from './content/ContentBox';
import styles from './css/Main.module.css'
import SidebarBox from "./sideBar/SidebarBox";

export default function BodyBox() {
  return (
    <div className={styles.bodyBox}>
        <SidebarBox/>
        <ContentBox/>
    
    </div>
  );
}

