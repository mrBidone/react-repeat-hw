import { RiExchangeDollarFill } from "react-icons/ri";
import styles from "./ExchangeForm.module.css";
import { useDispatch } from "react-redux";
import { fetchExchangeCurrencyThunk } from "reduxState/currency/operations";

export const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.currency;

    const [amount, from, , to] = value.split(" ");
    dispatch(fetchExchangeCurrencyThunk({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        className={styles.input}
        type="text"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        title="Request formst 15 USD in UAH"
        name="currency"
        required
      />
    </form>
  );
};
