import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import styles from "../styles/Player.module.css";

const Player = ({ spotify }) => {
  return (
    <Fragment>
      <main className={styles.Player}>
        <div className={styles.Player__body}>
          <Sidebar />
          <Body spotify={spotify} />
        </div>
        <Footer spotify={spotify} />
      </main>
    </Fragment>
  );
};

export default Player;
