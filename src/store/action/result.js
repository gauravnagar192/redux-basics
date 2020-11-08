import * as actionTypes from './actionTypes';

export const saveResult = (r) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: r,
  };
};

export const storeResult = (r) => {
  return (Dispatch) => {
    setTimeout(() => {
      Dispatch(saveResult(r));
    }, 2000);
  };
};

export const deleteResult = (i) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: i,
  };
};
