import formatDate from "../../helpers/formatDate";
import css from "./CryptoHistory.module.css";

const CryptoHistory = ({ items }) => {
  return (
    <>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.th}>№</th>
            <th className={css.th}>PRICE</th>
            <th className={css.th}>AMOUNT</th>
            <th className={css.th}>DATE</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, price, amount, date }, index) => (
            <tr key={id} className={css.tr}>
              <td className={css.td}>{index + 1}</td>
              <td className={css.td}>{price}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{formatDate(date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CryptoHistory;
