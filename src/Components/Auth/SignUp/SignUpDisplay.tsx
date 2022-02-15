import React from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

type Props = {
    //wrongPassword: boolean,
    usernameUsed: boolean,
    isSignUp: boolean,
    onChange: (event: any) => void,
    isSignUpHandler: () => void,
    onUsernameChange: (e: any) => void,
    onPasswordChange: (e: any) => void,
    onRoleChange: (e: any) => void,
    role: any
}

function SignUpDisplay(props: Props) {
    return (
        <Form onChange={props.onChange}>
            <FormGroup>
                <Label for="username" hidden>Username</Label>
                <Input onChange={e => props.onUsernameChange(e)} name="username" placeholder="Username" />
            </FormGroup>
            <br />
            <FormGroup>
                <Label for="password" hidden>Password</Label>
                <Input onChange={e => props.onPasswordChange(e)} type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <br />
            <FormGroup>
                <Label for="role" hidden>Role</Label>
                <Input onChange={e => props.onRoleChange(e)} value="role" name="role" id="role" placeholder="Role" />
            </FormGroup>
            <br />
            <Button type="submit">SignUP</Button>
            {console.log(props.isSignUp)}
            <p className="auth-switch" onClick={props.isSignUpHandler}>
                {props.isSignUp? "Don't have an account? Sign up here." :  "Already have an account? Login here."}
            </p>

        </Form>
    )
}

export default SignUpDisplay;