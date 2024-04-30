import {Status} from "./context";
const counterReducer = (state, action) => {
    switch (action.type) {
      case 'SET':
        return { ...state, count: action.count };
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      case 'SET_MY_COUNT':
        return { ...state, myCount: action.myCount };
      case 'INCREMENT_MY_COUNT':
        return { ...state, myCount: state.myCount + 1 };
      case 'DECREMENT_MY_COUNT':
        return { ...state, myCount: state.myCount - 1 };
      default:
        return state;
    }
  };