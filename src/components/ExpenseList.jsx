import React, { useState } from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onSaveExpense }) => {
  const [isEdit, setIsEdit] = useState(null);
  const [editedExpense, setEditedExpense] = useState({});

  // Handle changes to the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense({
      ...editedExpense,
      [name]: value,
    });
  };

  const handleEdit = (expense) => {
    setIsEdit(expense.id); 
    setEditedExpense(expense);
  };

  // Handle saving the edited expense
  const handleSave = () => {
    onSaveExpense(editedExpense); // Pass the edited data back to the parent component
    setIsEdit(null); // Reset the edit mode
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Title</th>
          <th>Category</th>
          <th>Payment Mode</th>
          <th>Recurring</th>
          <th>Beneficiary</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{isEdit === expense.id ? <input type="date" name="date" value={editedExpense.date} onChange={handleChange} /> : expense.date}</td>
            <td>{isEdit === expense.id ? <input type="number" name="amount" value={editedExpense.amount} onChange={handleChange} /> : `$${expense.amount}`}</td>
            <td>{isEdit === expense.id ? <input type="text" name="title" value={editedExpense.title} onChange={handleChange} /> : expense.title}</td>
            <td>{isEdit === expense.id ? <input type="text" name="category" value={editedExpense.category} onChange={handleChange} /> : expense.category}</td>
            <td>{isEdit === expense.id ? <input type="text" name="paymentMode" value={editedExpense.paymentMode} onChange={handleChange} /> : expense.paymentMode}</td>
            <td>{isEdit === expense.id ? <select name="recurring" value={editedExpense.recurring} onChange={handleChange}>
                <option value={true}>Recurring</option>
                <option value={false}>One-time</option>
              </select> : (expense.recurring ? 'Recurring' : 'One-time')}</td>
            <td>{isEdit === expense.id ? <input type="text" name="beneficiary" value={editedExpense.beneficiary} onChange={handleChange} /> : expense.beneficiary}</td>
            <td>{isEdit === expense.id ? <input type="text" name="tags" value={editedExpense.tags.join(', ')} onChange={(e) => setEditedExpense({ ...editedExpense, tags: e.target.value.split(', ') })} /> : expense.tags.join(', ')}</td>
            <td>
              {isEdit === expense.id ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setIsEdit(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(expense)}>Edit</button>
                  <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
