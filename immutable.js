import { createStore } from "redux";

const history = [];

// Reducer
const rootReducer = (state = { amount: 0 }, action) => {
  if (action.type === "increment") {
    // immutability
    state.amount = state.amount + 1;
    // return { amount: state.amount + 1 };
  } else if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  }

  return state;
};

// Declare the store
const store = createStore(rootReducer);

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 2000);
