import React, { Fragment } from "react";
import { loginUrl } from "../api/spotify";
import style from "../styles/Login.module.css";

const Login = () => {
  return (
    <Fragment>
      <div className={style.Login}>
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify-logo"
        />
        <a href={loginUrl}>Login with Spotify</a>
      </div>
    </Fragment>
  );
};

export default Login;
