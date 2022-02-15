import React from 'react';
import { Container } from 'reactstrap';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';


type State = {
    isLogin: boolean,
    isSignUp: boolean
}

export default class Auth extends React.Component<{}, State> {
    constructor(props: any){
        super(props)

        this.state = {
            isLogin: false,
            isSignUp: false 
        }
    }

    isLoginHandler() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    isSignUpHandler() {
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }

    render(){
        return (
            <Container>
                <Login isLogin={this.state.isLogin} isLoginHandler={this.isLoginHandler.bind(this)} />
                <SignUp isSignUp={this.state.isSignUp} isSignUpHandler={this.isSignUpHandler.bind(this)} />
            </Container>
        )
    }
}