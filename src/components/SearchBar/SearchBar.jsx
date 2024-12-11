import { useId, useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const textValueId = useId();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="text"
        id={textValueId}
        value={inputValue}
        onChange={handleChange}
      />
      <p
        style={{
          height: 30,
          borderSize: 0.5 + "px",
          borderStyle: "solid",
          borderColor: "white",
        }}
      >
        {inputValue}
      </p>
    </div>
  );
};

export default SearchBar;
