const ErrorMessage = ({ error }) => {
  return (
    <div>
      <p style={{ color: "red" }}>OOOOPS! {error}</p>
    </div>
  );
};

export default ErrorMessage;
