import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /**
   * Untuk memfilter tampilan sesuai tahun yang dipilih
   * 
   */
  const filteredExpenses = props.items.filter((exp) => {return exp.date.getFullYear().toString() === filteredYear})

  /**
   *
   * Create component from ExpensesItem and send back component to App.js
   * App.js send props about title,amount,date
   *
   * jika kita mendapatkan data array dan ingin kita ubah menjadi sebuah component
   * kita bisa gunakan map untuk membuat data tersebut. map berfungsi membuat sebuah array menjadi
   * array yang baru dengan bentuk yang bisa di custom
   *
   *
   */
  return (
      <div>
          <Card className="expenses">
              <h2 className="get-started">Hello Get Started</h2>
              <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
              <ExpenseChart expenses={filteredExpenses}/>
              <ExpensesList items={filteredExpenses}></ExpensesList>
          </Card>
      </div>
  );
}

export default Expenses;
