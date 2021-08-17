import React, {useState, useEffect, useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import {loggedStatus} from '../action/action';
import '../App.css';



function FormComponent(props) {

  const [Username, setUsername] = useState("Gaurav");
  const [Password, setPassword] = useState("kukreja");
  const [Essay, setEssay] = useState("Gaurav is about to die");
  const [flavor, setflavor] = useState("lime");
  const [going, setgoing] = useState(false);
  const [guests, setguests] = useState(0);

  const handleChange = (value) => { 
    console.log(Username, 'username', value.target.value);
    setUsername(value.target.value);
  }
  const handleChangePass = (value) => {
    console.log(Password, 'Password', value.target.value);
    setPassword(value.target.value);
  }
  const handleChangeArea = (value) => {
    console.log(Essay, 'Essay', value.target.value);
    setEssay(value.target.value);
  }
  const handleChangeSelect = (value) => {
    console.log(flavor, 'flavor', value.target.value);
    setflavor(value.target.value);
  }
  const handleInputChange = (value) => {
    console.log(going, 'going', value.target.value);
    setgoing(!going);
  }
  const handleInputChangeNum = (value) => {
    console.log(guests, 'guests', value.target.value);
    setguests(value.target.value);
  }
  const handleSubmit = () => {
      let data ={
          'username': Username,
          'password': Password,
          'Essay': Essay,
          'flavor': flavor,
          'going': going,
          'guest': guests
      };
      props.loggedStatuss(data);
  }

  useEffect(() => {
    console.log("Form component use effect Mount & Update");
    return () => {
      console.log("Form component use effect Un Mount");
    }
  });

  useLayoutEffect(() => {
    console.log("Form component use Layout effect Mount & Update");
    return () => {
      console.log("Form component use Layout effect Un Mount");
    }
  });

  return (
    <div className="FormComponent">
       <form>
        <label>
          Username:
          <input type="text" value={Username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" value={Password} onChange={handleChangePass} />
        </label>
        <label>
          Essay:
          <textarea value={Essay} onChange={handleChangeArea} />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={flavor} onChange={handleChangeSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={going}
            onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={guests}
            onChange={handleInputChangeNum} />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loogedStatus: state.loggedState.loogedStatus
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    loggedStatuss: (data) => {dispatch(loggedStatus(data))},
    //decrement: () => {dispatch(decrement())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
