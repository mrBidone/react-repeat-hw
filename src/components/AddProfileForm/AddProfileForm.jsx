import css from "./AddProfileForm.module.css";

// неконтрольована форма
const AddProfileForm = ({ onAddProfile }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    console.log("form was submited");

    const name = formElements.profileName.value;
    const tag = formElements.tag.value;
    const location = formElements.location.value;
    const profileStatus = formElements.profileStatus.value;
    const profileGender = formElements.profileGender.value;
    const profileIsVerified = formElements.profileIsVerified.checked;

    const profileObject = {
      name,
      tag,
      location,
      profileStatus,
      profileGender,
      profileIsVerified,
    };

    onAddProfile(profileObject);

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <span>User&apos;s name:</span>
        <input type="text" name="profileName" required />
      </label>
      <label>
        <span>User&apos;s tag:</span>
        <input type="text" name="tag" required />
      </label>
      <label>
        <span>Location:</span>
        <input type="text" name="location" required />
      </label>
      <p>Status activity:</p>
      <label>
        <span>
          Online:{" "}
          <input type="radio" name="profileStatus" value="Online" required />
        </span>
      </label>
      <label>
        <span>
          Offline:{" "}
          <input type="radio" name="profileStatus" value="Offline" required />
        </span>
      </label>
      <p>Gender:</p>
      <label>
        <span>
          Female:{" "}
          <input type="radio" name="profileGender" value="Female" required />
        </span>
      </label>
      <label>
        <span>
          Male:{" "}
          <input type="radio" name="profileGender" value="Male" required />
        </span>
      </label>
      <label htmlFor="">
        <span>
          The user is Verified:
          <input type="checkbox" name="profileIsVerified"></input>
        </span>
      </label>
      <button className={css.submitBtn} type="submit">
        Add new profile
      </button>
    </form>
  );
};

export default AddProfileForm;
