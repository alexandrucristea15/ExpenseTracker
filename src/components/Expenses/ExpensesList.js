import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpensesList.css";
import ExpensesListExtended from "./ExpensesListExtended";
import ExpensesChart from "./ExpensesChart";
import TotalExpensesSum from "./TotalExpensesSum";

const ExpensesList = (props) => {
  const [savedYear, setSavedYear] = useState("2020");
  const savePickedYear = (pickedYear) => {
    setSavedYear(pickedYear);
  };

  const filteredList = props.items.filter((expense) => {
    if (!savedYear) return true;
    return expense.date.getFullYear() === parseInt(savedYear);
  });

  const deleteExpense = (deletedItem) => {
    const newExpenses = props.items.filter((expense) => {
      return expense.id !== deletedItem;
    });

    props.deletedExpense(newExpenses);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onPickedYear={savePickedYear} selected={savedYear} />
        <ExpensesChart expenses={filteredList} />
        <TotalExpensesSum expenses={filteredList} />
        <ExpensesListExtended
          items={filteredList}
          deletedItem={deleteExpense}
        />
      </Card>
    </div>
  );
};

export default ExpensesList;
