import React from 'react'
import styles from './styles.module.css';

const LatestInfo = ({data}) => {
  return (   
    <div className={styles.outerContainer}>
        <div  className={styles.section}>
            <h1>{data?.competing_team}</h1>
            <h2>{data?.date}</h2>
            <h4>{data?.venue}</h4>
            <h4>{data?.result}</h4>
        </div>
        <div className={`${styles.section} ${styles.logo}`}> <img height="200px" width="100%" src={data?.competing_team_logo} alt='logo'/></div>
        <div className={`${styles.section} ${styles.rightSection}`}>
            <h3>First Innings</h3>
            <h5>{data?.first_innings}</h5>
            <h3>Second Innings</h3>
            <h5>{data?.second_innings}</h5>
            <h3>Man of the Match</h3>
            <h5>{data?.man_of_the_match}</h5>
            <h3>Umpires</h3>
            <h5>{data?.umpires}</h5>
        </div>
    </div>
  )
}

export default LatestInfo