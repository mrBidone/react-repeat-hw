import clsx from "clsx";

import css from "./Profile.module.css";

import officialIcon from "../../assets/img/official-icon.svg";
import userFemaleIMG from "../../assets/img/userFemale.png";
import userMaleIMG from "../../assets/img/userMale.png";

const Profile = ({
  name,
  tag,
  location,
  status = "Offline",
  IsVerificated,
  gender,
}) => {
  return (
    <>
      <li
        className={clsx(
          css.profileListItem,
          status === "Online" ? css.isOnline : ""
        )}
      >
        <div className={css.avatarThumb}>
          {gender === "Female" ? (
            <img
              className={css["avatar-image"]} // test класс через дефис
              src={userFemaleIMG}
              alt="UserFemale avatar"
            />
          ) : (
            <img
              className={css["avatar-image"]} // test класс через дефис
              src={userMaleIMG}
              alt="UserMale avatar"
            />
          )}
          {IsVerificated && (
            <img className={css.isVerificatedImage} src={officialIcon} />
          )}
        </div>

        <p>
          <span style={{ marginRight: 5 }}>
            {status === "Online" ? "🟢" : "🔴"}
          </span>
          {name}
        </p>
        <p>@{tag}</p>
        <p>{location}</p>
        <button type="button" onClick={() => handleClick(name)}>
          Click to alert
        </button>
      </li>
    </>
  );
};

export default Profile;
