import React, { useState } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import { INCREMENT , DECREMENT , ADD , SUB , STORE_RESULT , DELETE_RESULT } from '../../store/action';


const Counter = (props) => {
    let [count, setCount] = useState(0);

    const counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                setCount( count+1 )
                break;
            case 'dec':
                setCount( count-1 )
                break;
            case 'add':
                setCount( count+value )
                break;
            case 'sub':
                setCount( count-value )
                break;
            default:
                setCount(0)
                break;
        }
    }
        return (
            <div>
                <CounterOutput value={props.cnt} />
                <CounterControl label="Increment" clicked={props.onIncrement} />
                <CounterControl label="Decrement" clicked={props.onDecrement}  />
                <CounterControl label="Add 5" clicked={() => props.onAdd(5)}  />
                <CounterControl label="Subtract 5" clicked={() => props.onSub(5)}  />
                <hr />
                <button onClick={() => props.onStoreResult(props.cnt)}>Store Result</button>
                <ul>
                    {
                        props.result.map(result => {
                        return <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>{result.value}</li>;
                        })
                    }
                </ul>
            </div>
        );
}

const mapStatetoProps = (state) => {
    return {
        cnt : state.ctr.counter ,
        result : state.res.result
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        onIncrement : () => dispatch({type: INCREMENT}),
        onDecrement : () => dispatch({type: DECREMENT}),
        onAdd : (value) => dispatch({type: ADD,value: value}),
        onSub : (value) => dispatch({type: SUB,value: value}),
        onStoreResult : (result) => dispatch({type: STORE_RESULT,result:result}),
        onDeleteResult : (id) => dispatch({type: DELETE_RESULT,id: id})
    }
}


// connect component to center store and configure it 
export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);