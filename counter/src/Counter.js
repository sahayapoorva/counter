import React from "react";
import { connect } from "react-redux";


function Counter (props){
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  )
};

function mapStateToProps (state) {
  console.log('mapping state to props', state);
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return{
    onIncrement: ()=> {
      dispatch({
        type: 'INCREMENT'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
