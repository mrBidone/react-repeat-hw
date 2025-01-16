import { useDispatch, useSelector } from "react-redux";
import s from "./NewCounter.module.css";
import {
  changeStep,
  minusClick,
  plusClick,
  resetClick,
  selectCounter,
  selectStep,
} from "../../redux/counter/counterReducer";

const NewCounter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const handlePlusClick = () => {
    dispatch(plusClick());
  };

  const handleMinusClick = () => {
    dispatch(minusClick());
  };

  const handleResetClick = () => {
    dispatch(resetClick());
  };

  const handleChangeStep = (e) => {
    dispatch(changeStep(+e.target.value));
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className="btn" onClick={handleMinusClick}>
            minus
          </button>
          <button className="btn" onClick={handleResetClick}>
            reset
          </button>
          <button className="btn" onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCounter;
