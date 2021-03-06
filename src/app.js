import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
// const expenseOne = store.dispatch(
//   addExpense({ description: 'Rent', amount: 360000, createdAt: 500 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: 'Water bill', amount: 4000, createdAt: -1000 })
// );
// const expenseThree = store.dispatch(
//   addExpense({ description: 'Gas bill', amount: 100000, createdAt: 1000 })
// );

// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
//
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//
// console.log(visibleExpenses);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
