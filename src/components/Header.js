import React, { Fragment } from "react";
import styles from "../styles/Header.module.css";

import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import { useDataLayerValue } from "../redux/DataLayer";

const Header = () => {
  const [{ user }] = useDataLayerValue();

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Search />
          <input placeholder="Search for Artists, Songs or Album" type="text" />
        </div>
        <div className={styles.header__right}>
          <Avatar src={user?.images[0].url} alt={user?.display_name} />
          <h4>{user?.display_name}</h4>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
