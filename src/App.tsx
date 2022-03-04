import React, { Component } from "react";
import "./App.css";
import Header from "./Components/HeaderBar/HeaderBar";
import { Container } from "reactstrap";
import Footer from "./Components/Footer/Footer";

import HomeScreen from "./Components/screens/HomeScreen";
import LoginScreen from './Components/screens/LoginScreen';
import SignupScreen from './Components/screens/SignupScreen';
import CreateNoteScreen from "./Components/screens/CreateNoteScreen";
import CreateReviewScreen from "./Components/screens/CreateReviewScreen";
import DisplayAllReviewScreen from "./Components/screens/DisplayAllReviewScreen";
import DisplayAllNoteScreen from "./Components/screens/DisplayAllNoteScreen";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';



const App = () => {
   
   
return (
  <div className="mainDiv">
<BrowserRouter>
<Header/>
<main>
  <Container>
          <Routes>
          <Route path='/'  element={<HomeScreen />}/>
          <Route path='/signup' element={<SignupScreen />}/>
          <Route path='/login' element={<LoginScreen />}/>
          <Route path='/createNote' element={<CreateNoteScreen />}/>
          <Route path='/createReview' element={<CreateReviewScreen/>}/>
          <Route path='/displayReview' element={<DisplayAllReviewScreen />}/>
          <Route path='/displayNote' element={<DisplayAllNoteScreen/>}/>
         </Routes>
  </Container>
  </main>
  <Footer/>
  </BrowserRouter>
</div>

)

}

export default App;

