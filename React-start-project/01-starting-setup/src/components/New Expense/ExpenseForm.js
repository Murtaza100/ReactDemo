import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // different state for different fields
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using single state for all field
  // const [enteredValue,setEnteredValue] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleHandler = (event) => {
    // using different state for different fields
    setEnteredTitle(event.target.value);

    //using single state
    // setEnteredValue({
    //     ...enteredValue,
    //     enteredTitle:event.target.value
    // })

    //more professional and correct way of using single state
    // setEnteredValue((previousState)=>{
    //     return {...previousState, enteredTitle:event.target.value}
    // });
  };
//   const amountHandler = (event) => {
//     // using different state for different fields
//     setEnteredAmount(event.target.value);

//     //using single state
//     // setEnteredValue({
//     //     ...enteredValue,
//     //     enteredAmount:event.target.value
//     // })

//     //more professional and correct way of using single state
//     // setEnteredValue((previousState)=>{
//     //     return {...previousState, enteredAmount:event.target.value}
//     // });
//   };
  const dateHandler = (event) => {
    // using different state for different fields
    setEnteredDate(event.target.value);

    //using single state
    // setEnteredValue({
    //     ...enteredValue,
    //     enteredDate:event.target.value
    // })

    //more professional and correct way of using single state
    // setEnteredValue((previousState)=>{
    //     return {...previousState, enteredDate:event.target.value}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(formData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
