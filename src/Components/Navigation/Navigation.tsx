import { Reviews } from '@mui/icons-material';
import React from 'react';
import {
    Link
} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
                <div className='Sidebar'>
                    <h1>LINKS</h1>
                    <Link to ="/reviews">Reviews</Link>
                    <Link to ="/reviews/edit">Edit <Reviews></Reviews></Link>
                    <Link to ="/reviews/update/:reviewsId">Update Reviews</Link>
               
                    
                </div>
        )
    }
}

export default Navigation;