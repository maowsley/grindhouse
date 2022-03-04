
 

import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { useState, SyntheticEvent } from 'react';
import APIURL from '../../helpers/enviorment';
import {Link} from 'react-router-dom'
import './Signup.css';

import FormContainer from '../FormContainer/FormContainer';
 
interface Props {
  history: any
}

const SignupScreen = ({history}: any) => {
  
 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')

 

  const submitHandler = async(e:SyntheticEvent) => {
    e.preventDefault()
  
    //backend fetch
    await fetch(`${APIURL}/user/signup`, {
    
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    

      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    history.push('/createNote')

    console.log("Welcome to the GrindHouse")
  }

  
  return (
    <div className='mainDiv'>
      <FormContainer >
  
  <h1>Sign Up</h1>
  <Form onSubmit={submitHandler}>
    <FormGroup className="my-3">
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

export default SignupScreen;




function body(arg0: string, arg1: {}, arg2: { mode: string; }, method: any, arg4: string, headers: any, arg6: { 'Content-Type': string; }, credentials: any, arg8: string, body: any, arg10: string) {
  throw new Error('Function not implemented.');
}

