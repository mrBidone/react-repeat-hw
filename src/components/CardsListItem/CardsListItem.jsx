import clsx from "clsx";
import css from "./CardsListItem.module.css";

const CardsListItem = ({
  id,
  state,
  title,
  img,
  shortDescr,
  descr,
  onFlippedCard,
}) => {
  return (
    <li
      className={clsx(css.card, state && "flipped")}
      onClick={() => onFlippedCard(id)}
    >
      {!state ? (
        <div>
          <div>
            <h2>{title}</h2>
            <img src={img} alt="" width="150" height="200" />
            <p>{shortDescr}...</p>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2>{title}</h2>
            <p>{descr}</p>
          </div>
        </div>
      )}
    </li>
  );
};

export default CardsListItem;
