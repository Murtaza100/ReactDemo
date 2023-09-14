//import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // demo purpose button added so commenting it and its related codes
  // const [title,setTitle]=useState(props.title);
  // const onClickHandler=()=>{
  //   setTitle("updated title");
  // }

  return (
    // removed <div> and used card in its place as wrapper
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">₹{props.amount}</div>
        {/* <button onClick={onClickHandler}>update item</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
