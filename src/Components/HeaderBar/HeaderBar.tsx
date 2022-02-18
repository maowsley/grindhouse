import React, { Component, FunctionComponent } from "react"
import './HeaderBar.css';
import Home from '../Home/Home';
import Signup from  '../Auth/SignUp/SignUp';
import APIURL from "../../helpers/enviorment";
 import {Link} from 'react-router-dom';
import {Button} from "reactstrap";
  


interface HeaderProps {
    clearToken: () => void,
    token: string
  };
  class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props)

    }

    render() {
        return (
            <div className="NavBar">
       
            {/* <section className="navbar"> */}
                {this.props.token &&
            <Button
                onClick={this.props.clearToken}
              >Logout</Button> 
              }
                <Link className="NavBarItem" to='/' >GRINDHOUSE</Link>
                <Link className="NavBarItem" to="/auth">SignUp/Login</Link>
            {/* <a href="/" className="navbar-item1">GRINDHOUSE</a> */}
            {/* <a href="https://maogrindhouse.herokuapp.com/user/signupn" className="navbar-item2">SignUp</a>
            <a href="/Login" className="navbar-item3">Login</a>
            <a href="/Notes" className="navbar-item4">CoffeeNotes</a>
            <a href="/Reviews" className="navbar-item5">Reviews</a> */}
            {/* </section> */}
            </div>

        )
    }
}



export default Header;