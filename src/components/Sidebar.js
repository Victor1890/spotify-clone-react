import React, { Fragment } from "react";
import styles from "../styles/Sidebar.module.css";
import SlidebarOptions from "./SlidebarOption";
import { useDataLayerValue } from "../redux/DataLayer";

//Icons
import { Home, Search, LibraryMusic } from "@material-ui/icons";

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <Fragment>
      <aside className={styles.Sidebar}>
        <img
          className={styles.slidebar__logo}
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify-logo"
        />
        <SlidebarOptions Icon={Home} title="Home" />
        <SlidebarOptions Icon={Search} title="Search" />
        <SlidebarOptions Icon={LibraryMusic} title="You Library" />
        <br />
        <strong className={styles.slidebar__title}>PLAYLIST</strong>
        <hr />

        {playlists?.items?.map((playlists) => (
          <SlidebarOptions key title={playlists.name} />
        ))}
      </aside>
    </Fragment>
  );
};

export default Sidebar;
