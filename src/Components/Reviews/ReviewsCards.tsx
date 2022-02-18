import * as React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export interface ReviewCardProps {
  review: any;
}

const ReviewCard: React.SFC<ReviewCardProps> = (props) => {

  let convertDate: Date = new Date(props.review.created_at);
  let convertUpdated: Date = new Date(props.review.updated_at)

  return (
    <Card>
      <CardBody>
        <CardTitle>
 
          {Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          }).format(convertDate)}
        </CardTitle>
        <CardText>
        {Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
          }).format(convertUpdated)}
        </CardText>
        <CardSubtitle>
 
          {props.review.title}
        </CardSubtitle>
        <CardText>
    
          {props.review.user_username}
        </CardText>
        <CardText>
       
          {props.review.content}
        </CardText>
        <CardText>
       
          {props.review.rating}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default ReviewCard;