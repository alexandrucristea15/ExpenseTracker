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
          expense={expense}
          deleteExpense={deleteExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesListExtended;
