import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fill } from '../slice';

const ExpenseFormPage = () => {
    const navigate = useNavigate()
    const expensesDataString = localStorage.getItem('expenses_data') || '[]';
    const expenses = JSON.parse(expensesDataString)
let dispatch = useDispatch()
    const handleSaveExpense = (expense) => {
        expenses.push(expense);
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expense_data', updatedExpensesString);
        navigate('/expenses')
        dispatch(fill())
    };
    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} />
        </>
    );
};

export default ExpenseFormPage;