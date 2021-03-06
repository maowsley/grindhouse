
 

import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { useState, SyntheticEvent } from 'react';
import APIURL from '../../helpers/enviorment';
import {History} from 'history';
import FormContainer from '../FormContainer/FormContainer'
import './login.css';



const LoginScreen = ({history}: any) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async(e:SyntheticEvent) => {
    e.preventDefault()



    //backend fetch
    await fetch(`${APIURL}/user/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        username,
        password
      })
    })

    history.push('/createNote')

    console.log("Welcome Back to the GrindHouse")
  }
  return (
    <div className='mainDiv'>
      <FormContainer>
  
  <h1>Login</h1>
  <Form  classname="login" onSubmit={submitHandler}>
    <FormGroup className="my-3" >
      <Label>Username</Label>
      <Input type="email" placeholder="Enter you username"
      
      value={username}
      onChange={e => setUsername(e.target.value)}/>

    </FormGroup>

    <FormGroup className="my-3" >
      <Label>Password</Label>
      <Input type="password" placeholder="Password" 
      value={password}
      onChange={e => setPassword(e.target.value)}
       />
    </FormGroup>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </FormContainer>
  </div>
  )
}

export default LoginScreen;

