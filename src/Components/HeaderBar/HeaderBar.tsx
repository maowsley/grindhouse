import React, { Component, FunctionComponent } from "react"
import './HeaderBar.css';
import Home from '../Home/Home';
import Signup from  '../Auth/SignUp/SignUp';
import APIURL from "../../helpers/enviorment";
  
  
  
  class Header extends React.Component {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return (
            <div className="NavBar">
            <section className="navbar">
            <a href="/" className="navbar-item1">GRINGHOUSE</a>
            <a href="https://maogrindhouse.herokuapp.com/user/signup" className="navbar-item2">SignUp</a>
            <a href="/Login" className="navbar-item3">Login</a>
            <a href="/Notes" className="navbar-item4">CoffeeNotes</a>
            <a href="/Reviews" className="navbar-item5">Reviews</a>
            </section>
            </div>

        )
    }
}



export default Header;