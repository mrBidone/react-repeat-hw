import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id} className={css.friendsListItem}>
            <FriendListItem avatar={avatar} name={name} status={isOnline} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
