//import ExpenseItem from "./components/ExpenseItem";
import React,{useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Table",
    amount: 559,
    date: new Date(2023, 6, 10),
  },
];

function App() {

  const[updatedExpenses, setUpdatedExpenses] = useState(expenses)

  const addExpenseHandler = (expenseData)=> {
    setUpdatedExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  return (
    <div>
      <h2 style={{textAlign: 'center', textTransform: 'capitalize'}}>My Expense list tracker !</h2>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense> 
      </div>
      <div>
        <Expenses items={updatedExpenses}></Expenses>
      </div>

      {/* Note : below code is moved to expenses component and functionality is achieved by props */}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>  */}
    </div>
  );
}

export default App;
