const redux = require('redux');
const createStore = redux.createStore;

let initialState = 0;

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return ++initialState;
    }
    if(action.type === 'ADD_COUNTER') {
        return initialState + action.value;
    }
    return state;
}

// Store
const store = createStore(rootReducer)

// Subscription
store.subscribe(() => {
    console.log('SUBSCRIBE : '+store.getState());
})

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
