
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
         <h3>Hi there</h3>
         <Card></Card>
         <Button>Button</Button>
    </div>
  );
}
