import * as actionTypes from '../action';

const counter = 0;
const result = [];

const data = {
    counter : counter ,
}

const counterReducer = (state = data , action) => {

    switch(action.type) {
        case actionTypes.INCREMENT :  
            return {
                ...state ,
                counter : state.counter + 1
            };
        case actionTypes.DECREMENT :
            return {
                ...state ,
                counter : state.counter - 1
            };
        case actionTypes.ADD :  
            return {
                ...state ,
                counter : state.counter + action.value
            };
        case actionTypes.SUB :  
            return {
                ...state ,
                counter : state.counter - action.value
            };
        default : return state;
    }

}

export default counterReducer;