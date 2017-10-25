import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h2>
        Title: <Link to={`/edit/${id}`}>{description}</Link>
      </h2>

      <p>Amount: {amount / 100}</p>
      <p>Created at: {createdAt}</p>
    </div>
  );
};

export default ExpenseListItem;
