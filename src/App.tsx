import React, {Component} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import { render } from '@testing-library/react';
import ReviewIndex from './Components/Reviews/ReviewsIndex';
import NoteIndex from './Components/DrinkNotes/CoffeeNotesIndex';
import Home from './Components/Home/Home';
import Header from './Components/HeaderBar/HeaderBar';
import ReviewsCreate from './Components/Reviews/CreateReviews';
import NotesCreate from './Components/DrinkNotes/CreateCoffeeNotes';
import CoffeeCard from './Components/DrinkNotes/CoffeeCards';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';



interface SessionToken {
  token: string
}




export default class App extends React.Component<any, SessionToken> {
  state: SessionToken = {
    token: ''
  }

  clearToken = (): void => {
    localStorage.clear();
    this.setState(
      {token: ''}
    );
    alert('Welcome Back to the GrindHouse!')
  }

  updateToken = (newToken: string): void => {
    localStorage.setItem("token", newToken);
    this.setState({token: newToken});
  }

  //proctcedviews used to protect notes, and reviews and user login.signup
  protectedViews = (): JSX.Element => {
    return (this.state.token === localStorage.getItem('token') ? 
    <NoteIndex token={this.state.token} /> : 
     <><ReviewIndex token={this.state.token} /></>
     
    )}
 


  render() {
    return (
      <div className='mainDiv'>
        <BrowserRouter>
         < Header token={this.state.token}
                  clearToken={this.clearToken}/>

          <Routes > 
            <Route path="/" element={<Home />}/>
            <Route path="/auth" element={<Auth updateToken={this.updateToken} />}/>
            <Route path='/makeNotes' element={<NotesCreate token={''}/>}/>
            <Route path='/reviews' element={<ReviewsCreate token={''}/>} />
            <Route path='/getallReviews' element={ReviewIndex}/>
            <Route path='/allNotes' element={CoffeeCard}/>
          </Routes>
        
        
      
     
        
    
        
        
       </BrowserRouter>
      </div>
      )
  }


}

  


 



