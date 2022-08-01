/**
 *
 * Ini adalah kode javascript yang berisikan html didalamnya
 * kita sebut ini dengan jsx (javascript xml)
 * kita bisa membuat tampilan html di dalam sini yang nanti kita akan sebut dengan component
 *
 *
 */


import React, {useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpenses";


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
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
 
];
function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  // const [expenseValue, setExpenseValue] = useState(expenses);
  // untuk memperbarui jika ada data yang baru ditambahkan
  const addExpensesHandler = exp => {
    setExpenses(prevExpenses =>{
      return [exp, ...prevExpenses]
    });
  }
  return (
    /**
     * 
     * create component Expenses from Expenses.js
     */
    <div>
      <NewExpenses onAddExpense = {addExpensesHandler}></NewExpenses>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
