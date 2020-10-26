import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import styles from "../styles/Player.module.css";

const Player = ({ spotify }) => {
  return (
    <Fragment>
      <div className={styles.Player}>
        <div className={styles.Player_body}>
          <Sidebar />
          <Body spotify={spotify} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Player;
