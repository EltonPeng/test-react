import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    props.onAddExpense(expenseData);
  };

  const closeExpenseFormHandler = () => {
    setIsAddingNewExpense(false);
  };

  const addExpenseHandler = () => {
    setIsAddingNewExpense(true);
  };

  return (
    <div className="new-expense">
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={closeExpenseFormHandler}
        />
      )}
      {!isAddingNewExpense && (
        <button type="button" onClick={addExpenseHandler} >Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
