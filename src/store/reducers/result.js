import * as actionTypes from '../action';

const counter = 0;
const result = [];

const data = {
    result : result
}

const resultReducer = (state = data , action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT :
            return {
                ...state ,
                result : state.result.concat({id: new Date() , value : action.result})
            }
        case actionTypes.DELETE_RESULT :
            const updatedArray = state.result.filter(result => {
                if(result.id !== action.id) {
                    return true;
                } else {
                    return false;
                }               
            });
            return {
                ...state,
                result : updatedArray
            }
        default : return state;
    }

}

export default resultReducer;