import Profile from "../Profile/Profile";

const ProfileList = ({ onDeleteProfile, filteredProfiles }) => {
  return (
    <ul>
      {filteredProfiles.map(
        ({
          id,
          profileName,
          tag,
          location,
          isOnline,
          profileIsVerified,
          profileGender,
        }) => {
          return (
            <Profile
              key={id}
              profileName={profileName}
              id={id}
              tag={tag}
              location={location}
              isOnline={isOnline}
              profileIsVerified={profileIsVerified}
              profileGender={profileGender}
              onDeleteProfile={onDeleteProfile}
            />
          );
        }
      )}
    </ul>
  );
};

export default ProfileList;
