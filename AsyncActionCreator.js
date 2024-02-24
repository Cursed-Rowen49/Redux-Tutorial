import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { thunk } from "redux-thunk";

const initPending = "init/pending";
const initFulfilled = "init/fulfilled";
const initRejected = "init/rejected";

const reducerFuction = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case initPending:
      return { ...state, loading: true };
    case initFulfilled:
      return { amount: action.payload, loading: false };
    case initRejected:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const store = createStore(reducerFuction, applyMiddleware(thunk));

// Async Api Call using the thunk.
const getUser = async (dispatch, getState) => {
  try {
    dispatch(initPendingAC());
    const { data } = await axios.get("http://localhost:3000/accounts/1");
    dispatch(initFulfilledAC(data));
  } catch (error) {
    dispatch(initRejectedAC(error.message));
  }
};

// Action Creator
const initFulfilledAC = (data) => {
  return { type: initFulfilled, payload: data.amount };
};

const initPendingAC = (data) => {
  return { type: initPending, payload: data.amount };
};

const initRejectedAC = (error) => {
  return { type: initRejected, error: error };
};

store.dispatch(getUser);
setTimeout(() => {
  console.log(store.getState());
}, 1000);
