import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'DELETE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new' });
  expect(action).toEqual({
    id: '123abc',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'new'
    }
  });
});

test('shoudl setup action object with provided values', () => {
  const expenseDate = {
    description: 'Rent',
    amount: 109500,
    createdAt: 10000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id: expect.any(String)
    }
  });
});

test('should setup add expense abject with def values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      id: expect.any(String),
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
