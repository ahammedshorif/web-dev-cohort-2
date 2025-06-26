
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
         <h3>Hi there</h3>
         <Button>Button</Button>
    </div>
  );
}
