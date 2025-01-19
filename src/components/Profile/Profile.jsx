import clsx from "clsx";

import css from "./Profile.module.css";

import officialIcon from "../../assets/img/official-icon.svg";
import userFemaleIMG from "../../assets/img/userFemale.png";
import userMaleIMG from "../../assets/img/userMale.png";

const Profile = ({
  id,
  profileName,
  tag,
  location,
  isOnline,
  profileIsVerified,
  profileGender,
  onDeleteProfile,
}) => {
  return (
    <>
      <li className={clsx(css.profileListItem, isOnline ? css.isOnline : "")}>
        <button
          className={css.deleteBtn}
          type="button"
          onClick={() => {
            onDeleteProfile(id);
          }}
        >
          ❌
        </button>
        <div className={css.avatarThumb}>
          {!profileGender ? (
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
          {profileIsVerified && (
            <img className={css.isVerificatedImage} src={officialIcon} />
          )}
        </div>

        <p>
          <span style={{ marginRight: 5 }}>{isOnline ? "🟢" : "🔴"}</span>
          {profileName}
        </p>
        <p>@{tag}</p>
        <p>{location}</p>
      </li>
    </>
  );
};

export default Profile;
