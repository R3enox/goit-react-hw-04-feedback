import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPostiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total) + '%';
  };

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good': {
        setGood(prevState => prevState + 1);
        return;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1);
        return;
      }
      case 'bad': {
        setBad(prevState => prevState + 1);
        return;
      }
      default:
        return;
    }
  };

  const options = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();
  const postiveFeedbackPercentage = countPostiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackOptions options={options} onLeavFeedBack={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={postiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
