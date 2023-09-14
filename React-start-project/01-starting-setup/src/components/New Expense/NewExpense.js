import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const [isEditing, setIsediting] = useState(false);
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsediting(false);
  };
  const addNewExpenceHandler = () => {
    setIsediting(true);
  };

  const cancelHandler = () => {
    setIsediting(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenceHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}
