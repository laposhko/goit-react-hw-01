import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
