import React from "react";
import styles from "./styles.module.css";
import useRequest from "../../hooks/useRequest";
import { Link } from "react-router-dom";
const TeamsContainer = () => {
  const { data, loading } = useRequest({
    url: "https://apis.ccbp.in/ipl/",
    method: "GET",
  });
  return loading ? (
    <div> Loading... </div>
  ) : (
    <div className={styles.container}>
      {(data?.teams || []).map((team) => (
        <Link to={`nxtwave-ipl-dashboard/team-matches/${team?.id}`}  className={styles.teamCard} key={team.id}>
          <div className={styles.logo}>
            <img src={team.team_image_url} alt={team.name} height="100%" />
          </div>
          <div className={styles.teamName}>{team.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default TeamsContainer;
