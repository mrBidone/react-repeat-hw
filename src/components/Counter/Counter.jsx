const Counter = ({ counter, changeCounter, resetCounter }) => {
  return (
    <div>
      <p>count: {counter}</p>
      <button
        type="button"
        disabled={counter === 0}
        onClick={() => changeCounter("-")}
      >
        -
      </button>
      <button type="button" onClick={() => changeCounter("+")}>
        +
      </button>
      <button type="button" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
