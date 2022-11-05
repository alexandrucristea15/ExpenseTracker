import "../NewExpense/NewExpense.css";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const TotalExpensesSum = (props) => {
  let totalExpensesSum = 0;
  props.expenses.forEach((expense) => {
    totalExpensesSum += expense.amount;
  });
  return (
    <Card className="expense-item__total">
      <div className="expense-item__description">
        <h2>Total Expenses Sum</h2>
        <div className="expense-item__price">{totalExpensesSum}</div>
      </div>
    </Card>
  );
};

export default TotalExpensesSum;
