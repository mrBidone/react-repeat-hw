const SearchBox = ({ filteredValue, handleFilter }) => {
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
