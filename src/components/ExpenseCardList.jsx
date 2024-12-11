import React, { useState } from 'react';
import './expense-card.css'
export default function ExpenseCardList({ expenses, onDeleteExpense, onSaveExpense }) {
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
      <div className="expense-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-card">
            <div className="expense-card-header">
              <h3>{expense.title}</h3>
              {isEdit === expense.id ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={() => handleEdit(expense)}>Edit</button>
              )}
              <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            </div>
            <div className="expense-card-body">
              <div className="expense-field">
                <strong>Date:</strong>
                {isEdit === expense.id ? (
                  <input type="date" name="date" value={editedExpense.date} onChange={handleChange} />
                ) : (
                  <span>{expense.date}</span>
                )}
              </div>
              <div className="expense-field">
                <strong>Amount:</strong>
                {isEdit === expense.id ? (
                  <input type="number" name="amount" value={editedExpense.amount} onChange={handleChange} />
                ) : (
                  <span>${expense.amount}</span>
                )}
              </div>
              <div className="expense-field">
                <strong>Category:</strong>
                {isEdit === expense.id ? (
                  <input type="text" name="category" value={editedExpense.category} onChange={handleChange} />
                ) : (
                  <span>{expense.category}</span>
                )}
              </div>
              <div className="expense-field">
                <strong>Payment Mode:</strong>
                {isEdit === expense.id ? (
                  <input type="text" name="paymentMode" value={editedExpense.paymentMode} onChange={handleChange} />
                ) : (
                  <span>{expense.paymentMode}</span>
                )}
              </div>
              <div className="expense-field">
                <strong>Recurring:</strong>
                {isEdit === expense.id ? (
                  <select name="recurring" value={editedExpense.recurring} onChange={handleChange}>
                    <option value={true}>Recurring</option>
                    <option value={false}>One-time</option>
                  </select>
                ) : (
                  <span>{expense.recurring ? 'Recurring' : 'One-time'}</span>
                )}
              </div>
              <div className="expense-field">
                <strong>Beneficiary:</strong>
                {isEdit === expense.id ? (
                  <input type="text" name="beneficiary" value={editedExpense.beneficiary} onChange={handleChange} />
                ) : (
                  <span>{expense.beneficiary}</span>
                )}
              </div>
              <div className="expense-field">
                <strong>Tags:</strong>
                {isEdit === expense.id ? (
                  <input
                    type="text"
                    name="tags"
                    value={editedExpense.tags.join(', ')}
                    onChange={(e) => setEditedExpense({ ...editedExpense, tags: e.target.value.split(', ') })}
                  />
                ) : (
                  <span>{expense.tags.join(', ')}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}
