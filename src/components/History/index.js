import React from 'react'
import styles from './styles.module.css'
import MatchCard from '../MatchCard';

const History = ({data}) => {
  return (
    <div className={styles.container}>
        {(data||[]).map((item, index)=>{
            return <MatchCard key={index} data={item}/>
        })}

    </div>
  )
}

export default History