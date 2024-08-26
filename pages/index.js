import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./homepage-components/UI/Card";
import Button from "./homepage-components/UI/Button";
import Hadith from "./homepage-components/UI/Hadith";
import styles from "../styles/homepage.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={` w-screen h-screen  absolute ${styles.overlay}`} />
      <main
        className={
          `w-screen h-screen flex justify-center items-center ` +
          styles.main_background
        }
      >
        <Card className={"space-y-3"}>
          {" "}
          <Hadith />
          <div className="flex justify-center items-center space-x-2">
            <Button>Read Quran</Button>
            <Button>Login</Button>
          </div>
        </Card>
      </main>
    </>
  );
}
