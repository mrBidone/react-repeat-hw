import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.query.value.trim();
    if (!searchValue) {
      toast.error("Search Query can't must been empty");
    } else {
      onSubmit(searchValue);
      form.reset();
    }
  };

  return (
    <header className={css.pageHeader} style={{ marginBottom: 10 }}>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit} className={css.headerForm}>
        <input
          className={css.headerFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.headerFormBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
