import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedbackValue, setFeedbackValue] = useState(() => {
    return (
      localStorage.getItem("feedbackStatistic") ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("feedbackStatistic", JSON.stringify(feedbackValue));
  }, [feedbackValue]);

  const updateFeedback = (feedbackType) => {
    setFeedbackValue({
      ...feedbackValue,
      [feedbackType]: feedbackValue[feedbackType] + 1,
    });
  };

  const totalFeedback =
    feedbackValue.bad + feedbackValue.good + feedbackValue.neutral;

  const resetFeedback = () => {
    setFeedbackValue(() => {
      return { good: 0, neutral: 0, bad: 0 };
    });
  };

  const positiveFeedback = Math.round(
    (feedbackValue.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackValue={feedbackValue}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
