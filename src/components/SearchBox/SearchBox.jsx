import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filteredValue = useSelector((state) => state.filters.name);

  const handleFilter = (e) => {
    const value = e.target.value;

    dispatch(changeFilter(value));
  };
  return (
    <div>
      <label htmlFor="searchInput">
        <p>Find contacts by name</p>
        <input
          type="text"
          name="searchInput"
          value={filteredValue}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
