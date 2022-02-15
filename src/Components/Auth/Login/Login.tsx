import React, { Component} from "react";
import APIURL from "../../../helpers/enviorment";
import {Container} from 'reactstrap';
import LoginDisplay from './LoginDisplay';
import { EnumType } from "typescript";


type Props = {
    isLogin: boolean,
    isLoginHandler: () => void
}


type DataL = {
    username: string,
    password: string,
    role: any,
    wrongPassword: boolean,
    usernameUnknown: boolean

};



export default class Login extends React.Component<Props, DataL> {
    constructor(props:Props) {
        super(props)
        
        
        
        this.state = {
            username: " ",
            password: " ",
            role: " ",
            wrongPassword: false,
            usernameUnknown: false 
           
        };
    }

    //compoment did mount 
    
        handleSubmit = (event: any) => {
            event.preventDefault();
            fetch(`${APIURL}/user/login`, {
                method: "POST",
                body: JSON.stringify({email:this.state.username, password: this.state.password, role: this.state.role}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }) .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.error === 'bad gateway') {
                        console.log('stop');
                        this.setState({
                            wrongPassword: true
                        })
                    }
                    if (data.error === 'failed to authenticate') {
                        this.setState({
                            usernameUnknown:true
                        })
                    }
                })
        }
        
        onUsernameChange(e: any) {
            this.setState({
                username: e.target.value
            })
        }

        onPasswordChange(e: any) {
            this.setState({
                password: e.target.value
            })
        }

        onRoleChange(e:any) {
            this.setState({
                role: e.target.value
            })
        }


     

    render() {
        return (
            <div className="mainDiv">
                <Container>
                    <h1>Login</h1>
                    {console.log(this.props.isLogin)}
                    <LoginDisplay
                    wrongPassword={this.state.wrongPassword}
                    usernameUnknown={this.state.usernameUnknown}
                    onChange={this.handleSubmit}
                    isLogin={this.props.isLogin}
                    isLoginHandler={this.props.isLoginHandler}
                    onUsernameChange={this.onUsernameChange.bind(this)}
                    onPasswordChange={this.onPasswordChange.bind(this)}
                    onRoleChange={this.onRoleChange.bind(this)}
                    />
                        
                </Container>
            </div>
        )
    }


}