import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const deleteExpense = () => {
    props.deleteExpense(props.expense.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
          <button className="expense-item__price" onClick={deleteExpense}>
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
