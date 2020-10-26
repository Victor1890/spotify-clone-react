import React, { Fragment } from "react";
import styles from "../styles/Footer.module.css";

//Icons
import {
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  PlayCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";

//Material
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <img className={styles.footer__albumLogo} src="" alt="" />
          <div className={styles.footer__songInfo}>
            <h4>Yeah!</h4>
            <p>...</p>
          </div>
        </div>

        <div className={styles.footer__center}>
          <Shuffle className={styles.footer__green} />
          <SkipPrevious className={styles.footer__icon} />
          <PlayCircleOutline fontSize="large" className={styles.footer__icon} />
          <SkipNext className={styles.footer__icon} />
          <Repeat className={styles.footer__green} />
        </div>

        <div className={styles.footer__right}>
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlay />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
