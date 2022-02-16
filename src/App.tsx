import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth/Auth';
import Navbar from './Components/NavBar/NavBar';
import { render } from '@testing-library/react';



interface SessionToken {
  token: string
}




export default class App extends React.Component<any, SessionToken> {
  state: SessionToken = {
    token: ' '
  }

  clearToken = (): void => {
    localStorage.clear();
    this.setState(
      {token: ' '}
    );
    alert('Welcome Back to the GrindHouse!')
  }

  updateToken = (newToken: string): void => {
    localStorage.setItem("token", newToken);
    this.setState({token: newToken});
  }

  //proctcedviews used to protect notes, and reviews and user login.signup
  protectedViews = (): any => {
    return (this.state.token === localStorage.getItem('token') ? <DrinkNoteIndex token={this.state.token} /> : 
    <ReviewsIndex token={this.state.token} /> : 
    <Auth updateToken={this.updateToken} />)
  }


  render() {
    return (
      <div className='mainDiv'>
        <Navbar clearToken={this.clearToken} />
        {this.protectedViews()}
      </div>    
      )
  }


}
 



