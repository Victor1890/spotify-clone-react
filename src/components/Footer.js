import React, { Fragment, useEffect } from "react";
import { useDataLayerValue } from "../redux/DataLayer";
import styles from "../styles/Footer.module.css";

//Icons
import {
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  PlayCircleOutline,
  PauseCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";

//Material
import { Grid, Slider } from "@material-ui/core";

const Footer = ({ spotify }) => {
  const [{ item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((res) => {
      console.log(res);

      dispatch({
        type: "SET_PLAYING",
        playing: res.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();

      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();

      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();

    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();

    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: "SET_ITEM",
        item: res.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.footer__left}>
          <img
            className={styles.footer__albumLogo}
            src={item?.album.images[0].url}
            alt={item?.name || ""}
          />
          {item ? (
            <div className={styles.footer__songInfo}>
              <h4>{item?.name}</h4>
              <p>{item.artists.map((artists) => artists.name).join(", ")}</p>
            </div>
          ) : (
            <div className={styles.footer__songInfo}>
              <h4>Yeah!</h4>
              <p>...</p>
            </div>
          )}
        </div>

        <div className={styles.footer__center}>
          <Shuffle className={styles.footer__green} />
          <SkipPrevious
            onClick={skipPrevious}
            className={styles.footer__icon}
          />
          {playing ? (
            <PauseCircleOutline
              onClick={handlePlayPause}
              fontSize="large"
              className={styles.footer__icon}
            />
          ) : (
            <PlayCircleOutline
              onClick={handlePlayPause}
              fontSize="large"
              className={styles.footer__icon}
            />
          )}
          <SkipNext onClick={skipNext} className={styles.footer__icon} />
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
      </footer>
    </Fragment>
  );
};

export default Footer;
