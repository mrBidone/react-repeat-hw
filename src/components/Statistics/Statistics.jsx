import StatisticItem from "../StatisticItem/StatisticItem";
import style from "./Statistics.module.css";

import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";

const icons = [
  <FaRegThumbsUp key={1} />,
  <MdPeople key={2} />,
  <MdOutlineProductionQuantityLimits key={3} />,
  <GiTreeDoor key={4} />,
];

function Statistics({ title, stats }) {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }, index) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={icons[index]}
          />
        ))}
      </ul>
    </>
  );
}

export default Statistics;
