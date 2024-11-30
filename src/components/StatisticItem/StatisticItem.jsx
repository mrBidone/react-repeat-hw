import styled from "./StatisticItem.module.css";
import { IconContext } from "react-icons";

const StatisticItem = ({ title, total, icon }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ color: "black", size: "32px" }}>
        {icon}
      </IconContext.Provider>
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};

export default StatisticItem;
