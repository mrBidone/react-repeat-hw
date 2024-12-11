import Profile from "../Profile/Profile";

const ProfileList = ({ users }) => {
  return (
    <ul>
      {users.map(
        ({ key, name, tag, location, status, isVerified, gender = "Male" }) => {
          return (
            <Profile
              key={key}
              name={name}
              tag={tag}
              location={location}
              status={status}
              IsVerificated={isVerified}
              gender={gender}
            />
          );
        }
      )}
    </ul>
  );
};

export default ProfileList;
