import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = { contactName: "", contactNumber: "" };
const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const validationSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  contactNumber: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Too Short!")
    .max(13, "Too Long!"),
});

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
    };

    onAddContact(contactObject);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Contact's Name</label>
        <Field type="text" name="contactName" id={nameFieldId} />
        <ErrorMessage name="contactName" component="span" />
        <label htmlFor={numberFieldId}>Contact's Number</label>
        <Field type="text" name="contactNumber" id={numberFieldId} />
        <ErrorMessage name="contactNumber" component="span" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
