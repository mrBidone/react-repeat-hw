import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language: </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="🇬🇧">English</option>
        <option value="🇺🇦">Ukrainian</option>
        <option value="🇵🇱">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
