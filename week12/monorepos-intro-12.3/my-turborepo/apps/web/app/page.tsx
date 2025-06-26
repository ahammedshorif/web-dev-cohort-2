import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};



export default function Home() {
  return (
    <div className={styles.page}>
         <h3>Hi there</h3>
         <Button>Button</Button>
    </div>
  );
}
