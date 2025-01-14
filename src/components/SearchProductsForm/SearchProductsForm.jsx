import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SearchProductsValidationSchema = Yup.object().shape({
  searchTerm: Yup.string()
    .required("Пошукове поле обов'язкове")
    .min(2, "Пошукове слово має бути мінімум 2 символи")
    .max(20, "Пошукове поле має бути максимум 20 символів"),
});

const SearchProductsForm = ({ onSearch, defaultSearchValue }) => {
  const INITIAL_VALUES = {
    searchTerm: defaultSearchValue || "",
  };

  const handleProductsSubmit = (values) => {
    onSearch(values.searchTerm);
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleProductsSubmit}
        validationSchema={SearchProductsValidationSchema}
      >
        {({ errors }) => (
          <Form>
            <Field
              type="text"
              name="searchTerm"
              placeholder="Product search..."
            />
            <ErrorMessage
              name="searchTerm"
              style={{ color: "red" }}
              component="span"
            />
            <button type="submit">Search Products 🔍</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchProductsForm;
