import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  // State variables to store the current budget and transactions
  const [budget, setBudget] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Event handler for when the user submits a new transaction
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the values of the transaction amount and description from the form
    const amount = e.target.amount.value;
    const description = e.target.description.value;

    // Create a new transaction object with the amount and description
    const newTransaction = { amount, description };

    // Add the new transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);

    // Update the budget by subtracting the amount of the new transaction
    setBudget(budget - amount);

    // Clear the form fields
    e.target.amount.value = '';
    e.target.description.value = '';
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <p>Current Budget: ${budget}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" name="amount" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
      <h2>Transactions:</h2>
      <ul>
        {transactions.map((transaction) => (
          <li>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
