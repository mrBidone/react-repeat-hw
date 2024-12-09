import CardsListItem from "../CardsListItem/CardsListItem";
import css from "./CardsList.module.css";

const CardsList = ({ cards, onFlippedCard }) => {
  return (
    <>
      <ul className={css.cardsList}>
        {cards.map(({ id, flipped, title, img, shortDescr, descr }) => {
          return (
            <CardsListItem
              key={id}
              id={id}
              state={flipped}
              title={title}
              img={img}
              shortDescr={shortDescr}
              descr={descr}
              onFlippedCard={onFlippedCard}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CardsList;
