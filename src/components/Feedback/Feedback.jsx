import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={css.name}>Good: {good}</p>
      <p className={css.name}>Neutral: {neutral}</p>
      <p className={css.name}>Bad: {bad}</p>
      <p className={css.name}>Total: {totalFeedback}</p>
      <p className={css.name}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
