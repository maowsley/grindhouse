import  React from 'react';

interface ReviewEditProps {
  
}
 
interface ReviewEditState {
  review: string[]
}
 
class ReviewEdit extends React.Component<ReviewEditProps, ReviewEditState> {
  state: ReviewEditState = { 
    review : []  
  
  }
  render() { 
    return ( 
      <div>
        <h1>Review is connected!</h1>
      </div>
     );
  }
}
 
export default ReviewEdit;