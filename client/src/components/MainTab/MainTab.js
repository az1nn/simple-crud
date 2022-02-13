import React, { useState } from 'react';
import Axios from 'axios'
import * as Tabs from '@radix-ui/react-tabs';

import { CardContentContainer, CardH1, StyledButton, StyledInput, Tab, TabBar, TabsContainer } from './MainTab.styles';

const MainTab = () => {

  const [usernameLoginValue, setUsernameLoginValue] = useState('')
  const [passwordLoginValue, setPasswordLoginValue] = useState('')
  const [firstnameRegisterValue, setFirstnameRegisterValue] = useState('')
  const [usernameRegisterValue, setUsernameRegisterValue] = useState('')
  const [passwordRegisterValue, setPasswordRegisterValue] = useState('')

  const loginHandle = () => {
    Axios.post('http://localhost:3001/users', {
      username: usernameLoginValue,
      password: passwordLoginValue,
    }).then(() => {
      console.log("sucesso")
    })
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
    <TabsContainer defaultValue='login-tab'>
      <TabBar>
        <Tab value='login-tab'>Login</Tab>
        <Tab value='register-tab'>Register</Tab>
      </TabBar>
      <Tabs.Content value='login-tab'>
        <CardContentContainer id='login-form'>
          <CardH1>Login</CardH1>
          <StyledInput placeholder='Username' type="text" onChange={(e) => {setUsernameLoginValue(e.target.value)}}/>
          <StyledInput placeholder='Password' type="text" onChange={(e) => {setPasswordLoginValue(e.target.value)}}/>
          <StyledButton onClick={loginHandle} margin="40px 0px">LOGIN</StyledButton>
        </CardContentContainer>
      </Tabs.Content>
      <Tabs.Content value='register-tab'>
        <CardContentContainer id='register-form'>
          <CardH1>Register</CardH1>
          <StyledInput placeholder='First Name' type="text" onChange={(e) => {setFirstnameRegisterValue(e.target.value)}}/>
          <StyledInput placeholder='Username' type="text" onChange={(e) => {setUsernameRegisterValue(e.target.value)}}/>
          <StyledInput placeholder='Password' type="text" onChange={(e) => {setPasswordRegisterValue(e.target.value)}}/>
          <StyledButton onClick={registerHandle} margin="20px 0px">REGISTER</StyledButton>
        </CardContentContainer>
      </Tabs.Content>
    </TabsContainer>
  )
}

export default MainTab