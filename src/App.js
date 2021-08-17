import React, {useState, useEffect, useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './action/action';
import FormComponent from './component/FormComponent';
import MainComponent from './component/MainComponent';
import './App.css';



function App(props) {
 
  const [loggin, setLoggin] = useState(props.loggedStatus);

  useEffect(() => {
    console.log("App component use effect Mount & Update");
    setLoggin(props.loggedStatus);
    return () => {
      console.log("App component use effect Un Mount");
    }
  });

  useLayoutEffect(() => {
    console.log("App component use Layout effect Mount & Update");
    return () => {
      console.log("App component use Layout effect Un Mount");
    }
  });
  const increment = () => {
    props.increment("gaurav");
  }
  const decrement = () => {
    props.decrement();
  }

  return (
    <div className="App">
      {console.log("returm App", props.loggedStatus)}
        <p>Counter value is {props.count}</p>
        <button className="inc" onClick={increment}>+</button>
        <button className="dnc" onClick={decrement}>-</button>
        <p>My name is {props.data}</p>
        {loggin ? <MainComponent /> : <FormComponent />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count : state.counterState.count,
    data: state.counterState.data,
    loggedStatus: state.loggedState.loggedStatus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => {dispatch(increment(data))},
    decrement: () => {dispatch(decrement())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
