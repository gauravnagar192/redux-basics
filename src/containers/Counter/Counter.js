import React from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/action/index';

const Counter = (props) => {
  return (
    <div>
      <CounterOutput value={props.cnt} />
      <CounterControl label="Increment" clicked={props.onIncrement} />
      <CounterControl label="Decrement" clicked={props.onDecrement} />
      <CounterControl label="Add 5" clicked={() => props.onAdd(5)} />
      <CounterControl label="Subtract 5" clicked={() => props.onSub(5)} />
      <hr />
      <button onClick={() => props.onStoreResult(props.cnt)}>
        Store Result
      </button>
      <ul>
        {props.result.map((result) => {
          return (
            <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>
              {result.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    cnt: state.ctr.counter,
    result: state.res.result,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actionCreators.increment()),
    onDecrement: () => dispatch(actionCreators.decrement()),
    onAdd: (value) => dispatch(actionCreators.add(value)),
    onSub: (value) => dispatch(actionCreators.sub(value)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

// connect component to center store and configure it
export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
