import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import { thunk } from "redux-thunk";

const inc = "increment";
const dec = "decrement";
const incByPayload = "incrementByPayload";
const init = "init";

const reducerFuction = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case init:
      return { amount: action.payload };
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

const store = createStore(reducerFuction, applyMiddleware(thunk));

// Async Api Call.
const getUser = async (dispatch, getState) => {
  const { data } = await axios.get("http://localhost:3000/accounts/1");
  dispatch(initUser(data));
};

// Action Creator
const initUser = (data) => {
  return { type: init, payload: data.amount };
};
const increment = () => {
  return { type: inc };
};
const decrement = () => {
  return { type: dec };
};
const incrementByPayload = (value) => {
  return { type: incByPayload, payload: value };
};

store.dispatch(getUser);
setTimeout(() => {
  console.log(store.getState());
  store.dispatch(increment());
  console.log(store.getState());
  store.dispatch(decrement());
  console.log(store.getState());
  store.dispatch(incrementByPayload(5));
  console.log(store.getState());
}, 1000); 
