import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <>
      <img
        className={css.userPic}
        src={avatar}
        alt={`user ${name}`}
        width="48"
      />
      <p className={css.userName}>{name}</p>
      <p className={clsx(css.userStatus, status && css.statusOn)}>
        {status ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
