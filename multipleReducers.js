import { combineReducers, createStore } from "redux";

const INC = "account/inc";
const DEC = "account/dec";
const INCBONUS = "bonus/inc";
const DECBONUS = "bonus/dec";

// Action Creator for the Account Reducer.
const incrementAccount = () => {
  return { type: INC };
};
const decrementAccount = () => {
  return { type: DEC };
};

// Action Creator for the Bonus Reducer.
const incrementBonus = () => {
  return { type: INCBONUS };
};
const decrementBonus = () => {
  return { type: DECBONUS };
};

// Account Reducer
const accountReducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case INC:
      return { amount: state.amount + 1 };
    case DEC:
      return { amount: state.amount - 1 };
    default:
      return state;
  }
};

// Bonus Reducer
const bonusReducer = (state = { points: 10 }, action) => {
  switch (action.type) {
    case INCBONUS:
      return { points: state.points + 1 };
    case DECBONUS:
      return { points: state.points - 1 };
    default:
      return state;
  }
};

// Store Declaration
const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer })
);

store.dispatch(incrementAccount());
store.dispatch(decrementAccount());

store.dispatch(incrementBonus());
store.dispatch(decrementBonus());

console.log(store.getState());
