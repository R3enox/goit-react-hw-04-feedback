import css from './FeedbackOptions.module.css';

export const FeedBackOptions = ({ title, options, onLeavFeedBack }) => (
  <div className={css.wrapper}>
    {options.map(option => (
      <button
        className={css.btnOnClick}
        key={option}
        type="button"
        onClick={() => onLeavFeedBack(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
