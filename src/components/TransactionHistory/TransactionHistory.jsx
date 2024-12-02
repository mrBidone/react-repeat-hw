import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transTable}>
        <thead className={css.transTableTitle}>
          <tr className={css.transTableTitleStroke}>
            <th className={css.transTableTitleCell}>Type</th>
            <th className={css.transTableTitleCell}>Amount</th>
            <th className={css.transTableTitleCell}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.transTableMainStroke} key={id}>
              <td className={css.transTableMainCell}>{type}</td>
              <td className={css.transTableMainCell}>{amount}</td>
              <td className={css.transTableMainCell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
