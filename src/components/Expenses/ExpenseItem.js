import "./ExpenseItem.css"; //The import below specifies that css file should be considered
import ExpenseDate from "./ExpenseDate";
import React from "react";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    //composition
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
