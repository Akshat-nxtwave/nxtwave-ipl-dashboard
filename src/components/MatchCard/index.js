import React from 'react'
import styles from './styles.module.css'

function MatchCard({data}) {
  return (
    <div className={styles.container}>
        <div className={styles.logo}><img height="100px" src={data.competing_team_logo} alt="logo"/></div>
        <h2>{data.competing_team}</h2>
        <h4 className={styles.result}>{data.result}</h4>
        <h3 style={{color: data.match_status === 'Won' ? '#00aa33' : 'red'}}>{data.match_status}</h3>
    </div>
  )
}

export default MatchCard