import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, clearFeedback }) => {
  return (
    <div className={css.wrapper}>
      <button
        onClick={() => updateFeedback("good")}
        className={css.btn}
        type="button"
      >
        good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={css.btn}
        type="button"
      >
        neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className={css.btn}
        type="button"
      >
        bad
      </button>
      {totalFeedback !== 0 && (
        <button onClick={clearFeedback} className={css.btn} type="button">
          reset
        </button>
      )}
    </div>
  );
};

export default Options;
