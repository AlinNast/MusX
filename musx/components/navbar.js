import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { useState } from "react";
import NavItem from "./navitem";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <h1 className={styles.logo}>MusX</h1>
      </Link>

      <Link href={"scores/score-list"}>
        <h1 className={styles.button}>Library</h1>
      </Link>
      <Link href={"/"}>
        <h1 className={styles.button_disabled} data-hover="This section is still under construction">Lessons</h1>
      </Link>
    </nav>
  );
}
