import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//  Link, NavLink
import ExpenseDashBoardPage from './../components/ExpenseDashBoardPage';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
