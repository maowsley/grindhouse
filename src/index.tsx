import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Auth from './Components/Auth/Auth';
import ReviewIndex  from './Components/Reviews/ReviewsIndex';
import NoteIndex from './Components/DrinkNotes/CoffeeNotesIndex';
import Home from './Components/Home/Home';
  
import App from './App';

ReactDOM.render(
  <App />, document.getElementById("example")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
