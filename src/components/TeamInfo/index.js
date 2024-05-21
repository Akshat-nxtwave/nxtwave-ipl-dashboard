import React from 'react'
import { useParams } from 'react-router-dom'
import useRequest from '../../hooks/useRequest';
import styles from './styles.module.css';
import LatestInfo from '../LatestInfo';
import History from '../History';

const TeamInfo = () => {
    const { id } = useParams()
    const { data, loading } = useRequest({
        url: `https://apis.ccbp.in/ipl/${id}`,
        method: "GET"
    })
  return (
    loading ?
    <div>Loading...</div> :
    <div className={styles.container}>
        <div className={styles.banner}>
            <img height="250px" width="100%" src={data?.team_banner_url} alt='team-banner' />
        </div>
        <div className={styles.titleLatestInfo}>Latest Matches</div>
        <LatestInfo data={data?.latest_match_details} />
        <History data={data?.recent_matches} />
    </div>
  )
}

export default TeamInfo