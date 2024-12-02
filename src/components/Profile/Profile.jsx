import css from "./Profile.module.css";

const Profile = ({ name, tag, image, location, stats }) => {
  return (
    <div className={css.userThumb}>
      <div className={css.userContainer}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span>Followers</span>
          <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Views</span>
          <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Likes</span>
          <span className={css.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
