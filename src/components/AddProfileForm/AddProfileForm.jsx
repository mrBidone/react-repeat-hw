import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./AddProfileForm.module.css";

const ProfileValidationSchema = Yup.object().shape({
  profileName: Yup.string()
    .required("Імʼя профілю є обовʼязковим")
    .min(2, "Імʼя профілю має бути мінімум 2 символи")
    .max(30, "Імʼя профілю має бути меньшим за 50 символів"),
  tag: Yup.string()
    .required("Tag профілю має бути обовʼязковим")
    .min(5, "Tag профілю має бути мінімум 2 символи")
    .max(15, "Tag профілю має бути меньшим за 15 символів"),
  location: Yup.string()
    .required("Location профілю має бути обовʼязковим")
    .min(2, "location профілю має бути мінімум 2 символи")
    .max(15, "location профілю має бути меньшим за 15 символів"),
  profileStatus: Yup.string()
    .required("Статус профілю є обовʼязковим для вибору")
    .oneOf(["Online", "Offline"]),
  profileGender: Yup.string()
    .required("Стать особи профілю є обовʼязковим для вибору")
    .oneOf(["Male", "Female"]),
  profileIsVerified: Yup.bool(),
});

const INITIAL_VALUES = {
  profileName: "",
  tag: "",
  location: "",
  profileStatus: "",
  profileGender: "",
  profileIsVerified: false,
};

// неконтрольована форма
const AddProfileForm = ({ onAddProfile }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    const profileObject = {
      name: values.profileName,
      tag: values.tag,
      location: values.location,
      status: values.profileStatus,
      gender: values.profileGender,
      isVerified: values.profileIsVerified,
    };

    onAddProfile(profileObject);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label>
            <span>User&apos;s name:</span>
            <Field type="text" name="profileName" />
            <ErrorMessage
              className={css.errorMessage}
              name="profileName"
              component="span"
            />
          </label>
          <label>
            <span>User&apos;s tag:</span>
            <Field type="text" name="tag" />
            <ErrorMessage
              className={css.errorMessage}
              name="tag"
              component="span"
            />
          </label>
          <label>
            <span>Location:</span>
            <Field type="text" name="location" />
            <ErrorMessage
              className={css.errorMessage}
              name="location"
              component="span"
            />
          </label>
          <p>Status activity:</p>
          <label>
            <span>
              Online: <Field type="radio" name="profileStatus" value="Online" />
            </span>
          </label>
          <label>
            <span>
              Offline:{" "}
              <Field type="radio" name="profileStatus" value="Offline" />
            </span>
            <ErrorMessage
              className={css.errorMessage}
              name="profileStatus"
              component="span"
            />
          </label>
          <p>Gender:</p>
          <label>
            <span>
              Female:
              <Field type="radio" name="profileGender" value="Female" />
            </span>
          </label>
          <label>
            <span>
              Male: <Field type="radio" name="profileGender" value="Male" />
            </span>
            <ErrorMessage
              className={css.errorMessage}
              name="profileGender"
              component="span"
            />
          </label>
          <label htmlFor="">
            <span>
              The user is Verified:
              <Field type="checkbox" name="profileIsVerified" />
            </span>
          </label>
          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Add new profile
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddProfileForm;
