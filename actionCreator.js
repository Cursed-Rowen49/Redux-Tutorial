import { createStore } from "redux";

const inc = "increment";
const dec = "decrement";
const incByPayload = "incrementByPayload";

const reducerFunction = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case inc:
      return { amount: (state.amount += 1) };
    case dec:
      return { amount: (state.amount -= 1) };
    case incByPayload:
      return { amount: (state.amount = state.amount + action.payload) };
    default:
      return state;
  }
};

const store = createStore(reducerFunction);

// Action Creator
const increment = () => {
  return { type: inc };
};
const decrement = () => {
  return { type: dec };
};
const incrementByPayload = (value) => {
  return { type: incByPayload, payload: value };
};

store.dispatch(increment());
console.log(store.getState());
store.dispatch(decrement());
console.log(store.getState());
store.dispatch(incrementByPayload(5));
console.log(store.getState());