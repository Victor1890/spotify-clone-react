import React, { Fragment } from "react";
import styles from "../styles/Sidebar.module.css";

const SlidebarOptions = ({ title, Icon }) => {
  return (
    <Fragment>
      <div className={styles.sidebarOption}>
        {Icon && <Icon className={styles.sidebarOption__icon} />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    </Fragment>
  );
};

export default SlidebarOptions;
