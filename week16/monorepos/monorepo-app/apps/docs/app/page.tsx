
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";




export default function Home() {
  return (
      <div>
            <Button appName="docs" className={styles.secondary}>
          Open alert
        </Button>
        <div>This is docs page</div>
      </div>
    );
}
