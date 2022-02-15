import React, { Component} from "react";
import APIURL from "../../../helpers/enviorment";
import {Container} from 'reactstrap';
import SignUpDisplay from './SignUpDisplay';


type Props = {
    isSignUp: boolean,
    isSignUpHandler: () => void
}


type DataS = {
    username: any,
    password: string,
    role: any,
    //wrongPassword: boolean,
    usernameUsed: boolean

};



export default class SignUp extends React.Component<Props, DataS> {
    constructor(props:Props) {
        super(props)
        
        
        
        this.state = {
            username: " ",
            password: " ",
            role: " ",
            //wrongPassword: false,
            usernameUsed: false 
           
        };
    }

    //compoment did mount 
    
        handleSubmit = (event: any) => {
            event.preventDefault();
            fetch(`${APIURL}/user/register`, {
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
                            usernameUsed: true
                        })
                    }
                    }
                
                )};
        
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
                    <h1>SignUP</h1>
                    {console.log(this.props.isSignUp)}
                    <SignUpDisplay
                        usernameUsed={this.state.usernameUsed}
                        onChange={this.handleSubmit}
                        isSignUp={this.props.isSignUp}
                        isSignUpHandler={this.props.isSignUpHandler}
                        onUsernameChange={this.onUsernameChange.bind(this)}
                        onPasswordChange={this.onPasswordChange.bind(this)}
                        onRoleChange={this.onRoleChange.bind(this)} role={undefined} />
                        
                </Container>
            </div>
        )
    }


}