import React, { Component, FunctionComponent } from "react"
import './HeaderBar.css';
import Home from '../Home/Home';
import Signup from  '../Auth/SignUp/SignUp';
import APIURL from "../../helpers/enviorment";
 import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
  


interface HeaderProps {
    clearToken: () => void,
    token: string
  };
  export default class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props)

    };

  render() {
      return (
      <div className="NavBar">
                 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className="BarBar"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <MenuIcon />
           </IconButton>
           <Typography variant="h6" component='div' sx={{flexGrow: 1}}>
           <Link className="NavBarItem" to='/' >GRINDHOUSE</Link>

           </Typography>
           <Link className="NavBarItem" to="/auth">SignUp/Login</Link>
           <Link className="NavBarItem" to='/getallReviews'>Reviews</Link>
           <Link className="NavBarItem" to='/auth'>Coffee Notes</Link>
           {this.props.token &&
           <Button><Link className="NavBarItem" to='logout'{...this.props.clearToken}>Logout</Link></Button>
            };
            </Toolbar>
            </AppBar>
            </Box>
            );
      
          </div>
      );
  };  
};





