import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  /**
   * useState merupakan bagian dari react
   * useState berguna jika kita ingin mengupdate nilai dari sebuah object di component
   * karena cara kerja react yang hanya akan membaca sekali waktu. jadi jika ada perubahan nilai dari suatu object
   * maka tidak akan dianggap. maka kita perlu cara khusus dengan useState
   * 
   */
  // const [title, newTitle] = useState(props.title);
  // const [price, newPrice] = useState(props.amount);

  
  /**
   *
   * ExpenseItem create component and send back to Expenses.js
   * Expenses.js send data with 3 object title,amount, date
   *
   * ExpensesItem create ExpensesData component and send date props
   */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rp.{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
