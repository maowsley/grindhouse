import React, {Component} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import { render } from '@testing-library/react';
import ReviewIndex from './Components/Reviews/ReviewsIndex';
import NoteIndex from './Components/DrinkNotes/CoffeeNotesIndex';
import Home from './Components/Home/Home';
import Header from './Components/HeaderBar/HeaderBar';
import Sitebar from './Components/NavBar/NavBar';



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
    return (this.state.token === localStorage.getItem('token') ? 
    <NoteIndex token={this.state.token} /> : 
     <><ReviewIndex token={this.state.token} /><Auth updateToken={this.updateToken} /></>
     
    )}


  render() {
    return (
    
      <div className='mainDiv'>
        < Header />
        <Home />
        
        <Sitebar clearToken={this.clearToken} />
        {this.protectedViews()}
     
        
    
        
        
      </div>    
      )
  }


}
 



