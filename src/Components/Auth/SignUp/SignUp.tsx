import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../../helpers/enviorment'
import './SignUpDisplay.css';
import {Link} from 'react-router-dom';






interface Props {
  updateToken?:  any;
}
 interface SignupState {
  username: string,
  password: string
  
}





export default class Signup extends React.Component<Props, SignupState > {
   
  
  state: SignupState = {
    username: '',
    password: ''
    
    
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

   handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    fetch(`${APIURL}/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
          
         
        }
      }),
       headers: new Headers({
        'Content-Type': 'application/json'
       })
    }).then(
      (response) => response.json()
    ).then((data) =>   {
      this.props.updateToken(data.sessionToken)
    })
  }

  render() {
    return (
      <div className='mainDiv'>
      <Form className='forms' onSubmit={this.handleSubmit}>
        <FormGroup className='post'>
          <Label htmlFor="username">Username</Label>
          <Input className='boxbox'
            onChange={this.handleChange} value={this.state.username}
            name="username" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={this.handleChange} value={this.state.password}
            name="password" type="password" required/>
        </FormGroup>
        <Link to='/makeNotes'><Button type="submit">Sign Up</Button></Link>
      </Form>
      </div>
    )
  }
}
