import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setBy = 100 } = {}) => {
  return {
    type: 'SETCOUNT',
    setBy
  };
};

const resetCount = () => {
  return {
    type: 'RESET'
  };
};

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SETCOUNT':
      return {
        count: action.setBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount());

store.dispatch(setCount({ setBy: 111 }));
