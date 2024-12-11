import React from 'react';
import './inputs.css'
export const DateInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Date:</label>
      <input type="date" value={value} onChange={(e) => onChange(e.target.value)} required />
    </div>
  );
};

  
export const AmountInput = ({ value, onChange }) => {
  return (
    <div>
    <label>Amount:</label>
    <input type="number" value={value} onChange={(e) => onChange(e.target.value)} required />
    </div>
  );
};


export const TitleInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Title:</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} required />
    </div>
  );
};


const categories = [
  "Entertainment", "Food", "Groceries", "Gift", "Apparel", "Self Care", "Donation", "Capital Expense", "Travel", "Repair", "Medical", "Miscellaneous", "Petrol"
];

export const CategoryInput = ({ selectedCategory, onChange, newCategory, onNewCategoryChange }) => {
  return (
    <div>
      <label>Category:</label>
      <div>
        {categories.map(category => (
          <label key={category}>
            <input type="radio" name="category" value={category} checked={selectedCategory === category} onChange={() => onChange(category)} />
            {category}
          </label>
        ))}
        <input type="text" value={newCategory} onChange={(e) => onNewCategoryChange(e.target.value)} placeholder="Add New Category" />
      </div>
    </div>
  );
};


export const PaymentModeInput = ({ selectedMode, onChange }) => {
  return (
    <div>
      <label>Payment Mode:</label>
      <div>
        <label>
          <input type="radio" name="payment-mode" value="Cash" checked={selectedMode === 'Cash'} onChange={() => onChange('Cash')} />
          Cash
        </label>
        <label>
          <input type="radio" name="payment-mode" value="Digital" checked={selectedMode === 'Digital'} onChange={() => onChange('Digital')} />
          Digital
        </label>
      </div>
    </div>
  );
};


export const RecurringInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Recurring:</label>
      <input type="checkbox" checked={value} onChange={() => onChange(!value)} />
    </div>
  );
};

export const BeneficiaryInput = ({ selectedBeneficiary, onChange }) => {
  return (
    <div>
      <label>Beneficiary:</label>
      <div>
        <label>
          <input type="radio" name="beneficiary" value="Self" checked={selectedBeneficiary === 'Self'} onChange={() => onChange('Self')} />
          Self
        </label>
        <label>
          <input type="radio" name="beneficiary" value="Family" checked={selectedBeneficiary === 'Family'} onChange={() => onChange('Family')} />
          Family
        </label>
        <label>
          <input type="radio" name="beneficiary" value="Friends" checked={selectedBeneficiary === 'Friends'} onChange={() => onChange('Friends')} />
          Friends
        </label>
        <label>
          <input type="radio" name="beneficiary" value="Vehicle" checked={selectedBeneficiary === 'Vehicle'} onChange={() => onChange('Vehicle')} />
          Vehicle
        </label>
      </div>
    </div>
  );
};


export const TagsInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Tags:</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};