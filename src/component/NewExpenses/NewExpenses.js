import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import React, {useState} from 'react';

const NewExpenses = (props) => {

    /***
     * Jika data tidak sedang di edit maka hanya akan muncul tombol add new expense
     *
     *
     */
    let [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const closeEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("ExpenseDataHadler di panggil");
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    let newExpenses;

    if (!isEditing) {
        newExpenses = <button onClick={startEditingHandler}>Add New Expense</button>;
    } else if (isEditing) {
        newExpenses =
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={closeEditingHandler}></ExpenseForm>;
    }

    return (
        <div className="new-expense">
            {
                newExpenses
            }
        </div>
    );
};

export default NewExpenses;