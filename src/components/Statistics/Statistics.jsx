import PropTypes from "prop-types";
import styles from './Statistics.module.css'

const Statistics = ({title, stats}) => {
  return (
    <section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>
  <ul className={styles.statList}>
    {stats.map( stat => (
      <li className={styles.item} key= {stat.id}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
    ))
    }
    
  </ul>
</section>
  )
}

export default Statistics;

Statistics.propTypes = {
  id: PropTypes.node,
  label: PropTypes.string,
  percentage: PropTypes.string,
};