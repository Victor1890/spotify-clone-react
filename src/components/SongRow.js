import React, { Fragment } from "react";
import styles from "../styles/SongRow.module.css";

const SongRow = ({ track = "test" }) => {
  return (
    <Fragment>
      <div className={styles.songRow}>
        <img
          className={styles.songRow__album}
          src={track.album.images[0].url}
          alt
        />
        <div className={styles.songRow__info}>
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")}
            {track.album.name}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SongRow;
