import css from "./ColorContainer.module.css";

const ColorContainer = ({ handleClickOnChangeColor }) => {
  return (
    <div
      onClick={handleClickOnChangeColor}
      className={css.colorContainer}
    ></div>
  );
};

export default ColorContainer;
