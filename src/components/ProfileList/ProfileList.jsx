import Profile from "../Profile/Profile";

const ProfileList = ({ onDeleteProfile, filteredProfiles }) => {
  return (
    <ul>
      {filteredProfiles.map(
        ({ id, name, tag, location, status, isVerified, gender = "Male" }) => {
          return (
            <Profile
              key={id}
              name={name}
              id={id}
              tag={tag}
              location={location}
              status={status}
              IsVerificated={isVerified}
              gender={gender}
              onDeleteProfile={onDeleteProfile}
            />
          );
        }
      )}
    </ul>
  );
};

export default ProfileList;
