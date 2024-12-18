import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import style from "./EditForm.module.css";
import { useState } from "react";

export const EditForm = ({ defaultValue, onCancel, onSave }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(inputValue);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={onCancel} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
};
