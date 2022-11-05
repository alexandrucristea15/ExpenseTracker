import ExpenseItem from "./ExpenseItem";
import "./ExpensesListExtended.css";

const ExpensesListExtended = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found...</h2>;
  }

  const deleteExpenseHandler = (deletedExpense) => {
    props.deletedItem(deletedExpense);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          deleteExpense={deleteExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesListExtended;
