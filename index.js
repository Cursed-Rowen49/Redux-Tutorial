import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Reducer
const rootReducer = (state = { amount: 0 }, action) => {
  if (action.type === "increment") {
    return { amount: state.amount + 1 };
  } else if (action.type === "decrement") {
    return { amount: state.amount - 1 };
  } else if (action.type === "incrementByPayload") {
    return { amount: state.amount + action.payload.value };
  }

  return state;
};

// Declare the store
const store = createStore(rootReducer, applyMiddleware(logger.default));

// dispatch
store.dispatch({ type: "increment" });
console.log(store.getState());
store.dispatch({ type: "decrement" });
console.log(store.getState());
store.dispatch({ type: "incrementByPayload", payload: { value: 5 } });
console.log(store.getState());
