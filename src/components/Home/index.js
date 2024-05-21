import React from "react";
import TeamsContainer from '../TeamsContainer'
import styles from "./styles.module.css";

const Home = () => {
 

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.logo}>
          <img
          height="90px"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
        </div>
        <div className={styles.title}>IPL Dashboard</div>
      </div>
      <TeamsContainer />
    </div>
  );
};

export default Home;
