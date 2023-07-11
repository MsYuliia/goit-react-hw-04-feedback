import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <p className={css.statisticGood}>Good: {good}</p>
      <p className={css.statisticNeutral}>Neutral: {neutral}</p>
      <p className={css.statisticBad}>Bad: {bad}</p>
      <p className={css.statisticTotal}>Total: {total}</p>
      <p className={css.statisticPercent}>Positive Percentage: {percentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
