import React, { Fragment } from "react";
import { useDataLayerValue } from "../redux/DataLayer";
import styles from "../styles/Body.module.css";
import Header from "./Header";
import SongRow from "./SongRow";

//Icons
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <Fragment>
      <div className={styles.Body}>
        <Header spotify={spotify} />

        <div className={styles.body__info}>
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className={styles.body__infoText}>
            <strong>PLAYLISTS</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className={styles.body__sogns}>
          <div className={styles.body__icon}>
            <PlayCircleFilled className={styles.body__shuffle} />
            <Favorite fontSize="large" />
            <MoreHoriz className />
          </div>

          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
