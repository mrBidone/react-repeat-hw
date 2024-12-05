const Feedback = ({ feedbackValue, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedbackValue.good}</li>
        <li>Neutral: {feedbackValue.neutral}</li>
        <li>Bad: {feedbackValue.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
