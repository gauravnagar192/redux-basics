import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../utility';

const counter = 0;

const data = {
  counter: counter,
};

const counterReducer = (state = data, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updatedObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updatedObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updatedObject(state, { counter: state.counter + action.value });
    case actionTypes.SUB:
      return updatedObject(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};

export default counterReducer;
