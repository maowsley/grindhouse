import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import './Auth.css';


type Props = {
  updateToken: any;

};





function Auth({ updateToken }: Props): any {


  return (

    <div className='maindiv'>

      <div className="cupcup">
      <Container className='cont'>
        <SignUp
          updateToken={updateToken}
        />
        <Login
          updateToken={updateToken}
        />
      </Container>
      </div>
    </div>
  );
};

export default Auth;