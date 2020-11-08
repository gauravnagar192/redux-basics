import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../utility';

const result = [];

const data = {
  result: result,
};

const deleteObject = (state, action) => {
  const updatedArray = state.result.filter((result) => {
    if (result.id !== action.id) {
      return true;
    } else {
      return false;
    }
  });
  return updatedObject(state, { result: updatedArray });
};

const resultReducer = (state = data, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updatedObject(state, {
        result: state.result.concat({ id: new Date(), value: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteObject(state, action);
    default:
      return state;
  }
};

export default resultReducer;
