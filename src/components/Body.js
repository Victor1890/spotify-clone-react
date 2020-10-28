import React, { Fragment } from "react";
import { useDataLayerValue } from "../redux/DataLayer";
import styles from "../styles/Body.module.css";
import Header from "./Header";
import SongRow from "./SongRow";

//Icons
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:01Au4XDK1Ky1MoP2PK6j9R`,
      })
      .then((res) => {
        console.log(res);
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
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(() => {
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
      });
  };

  return (
    <Fragment>
      <div className={styles.Body}>
        <Header spotify={spotify} />

        <div className={styles.body__info}>
          <img
            src={discover_weekly?.images[0].url}
            alt={discover_weekly?.owner.display_name || "hola"}
          />
          <div className={styles.body__infoText}>
            <strong>PLAYLISTS</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className={styles.body__sogns}>
          <div className={styles.body__icon}>
            <PlayCircleFilled
              className={styles.body__shuffle}
              onClick={playPlaylist}
            />
            <Favorite fontSize="large" />
            <MoreHoriz />
          </div>

          {discover_weekly?.tracks.items.map((item, i) => (
            <div key={i}>
              <SongRow playSong={playSong} track={item.track} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
