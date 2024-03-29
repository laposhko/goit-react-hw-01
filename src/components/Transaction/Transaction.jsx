import css from "./Transaction.module.css";
export default function Transaction({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </>
  );
}
