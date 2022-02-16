import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../../helpers/enviorment'

interface Props {
  updateToken?: any;
}

interface SignupState {
  username: string,
  password: string,
  role: any

}






export default class Signup extends React.Component<Props, SignupState> {
   
  
  state: SignupState = {
    username: '',
    password: '',
    role: '',
    
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
          password: this.state.password,
          role: this.state.role
         
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      this.props.updateToken(data.sessionToken)
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={this.handleChange} value={this.state.username}
            name="username" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={this.handleChange} value={this.state.password}
            name="password" type="password" required/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='role'>Role</Label>
        <Input 
            onChange={this.handleChange} value={this.state.role}
            typeof="Role" name="role" required/>
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    )
  }
}
