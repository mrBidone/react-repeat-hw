import ForbesListItem from "../ForbesListItem/ForbesListItem";
import css from "./ForbesList.module.css";

const ForbesList = ({ list }) => {
  return (
    <div className={css.board}>
      <div className={css.header}>
        <h2 className={css.title}>
          <span className={css.titleTop}>Forbes</span>
          <span className={css.titleBottom}>Leader board</span>
        </h2>
      </div>
      <ul className={css.list}>
        {list.map(({ id, name, capital, avatar, isIncrease }) => (
          <ForbesListItem
            key={id}
            name={name}
            capital={capital}
            avatar={avatar}
            isIncrease={isIncrease}
          />
        ))}
      </ul>
    </div>
  );
};

export default ForbesList;
