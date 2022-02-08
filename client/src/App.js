import React, { useState } from 'react';
import Axios from 'axios'

import './App.css';

function App() {

  const [firstnameLoginValue, setFirstnameLoginValue] = useState('')
  const [usernameLoginValue, setUsernameLoginValue] = useState('')
  const [passwordLoginValue, setPasswordLoginValue] = useState('')
  const [firstnameRegisterValue, setFirstnameRegisterValue] = useState('')
  const [usernameRegisterValue, setUsernameRegisterValue] = useState('')
  const [passwordRegisterValue, setPasswordRegisterValue] = useState('')
  

  const loginHandle = () => {
    
  }
  const registerHandle = () => {
    Axios.post('http://localhost:3001/register', {
      first_name: firstnameRegisterValue,
      username: usernameRegisterValue,
      password: passwordRegisterValue,
    }).then(() => {
      console.log("sucesso")
    })
  }
  
  return (
    <div className="App">
      <div id='login-form'>
        <h1>LOGIN</h1>
        <input placeholder='First Name' type="text"/>
        <input placeholder='Username' type="text"/>
        <input placeholder='Password' type="text"/>
        <button onClick={loginHandle}>Login</button>
      </div>
      <div id='register-form'>
        <h1>Register</h1>
        <input placeholder='First Name' type="text" onChange={(e) => {setFirstnameRegisterValue(e.target.value)}}/>
        <input placeholder='Username' type="text" onChange={(e) => {setUsernameRegisterValue(e.target.value)}}/>
        <input placeholder='Password' type="text" onChange={(e) => {setPasswordRegisterValue(e.target.value)}}/>
        <button onClick={registerHandle}>Register</button>
      </div>
      <div id="users_list">

      </div>
    </div>
  );
}

export default App;
