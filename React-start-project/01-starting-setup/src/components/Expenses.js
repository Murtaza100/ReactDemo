import React, { useState } from "react";
import "./Expenses.css";
//import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./Expenses/ExpenseChart";

function Expenses(props) {

  //setting initial useState value
  const [filteredYear, setFilteredYear] = useState("2023");

  // setting updated year to useState on selection from dropdown
  const ddChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //to filter items based on year selected from dropdowns
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //moving below code to expensesList.js
  // let expenseContent = "No expense found for year " + filteredYear;
  // if(filteredExpenses.length>0){
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ))
  // }

  return (
    // changing and using cards at its place as wrapper
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onDropDownChange={ddChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        {/* {expenseContent} */}
        
        {/* commenting as we are now using dynamic approach
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;
