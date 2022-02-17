import * as React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faRunning, faStickyNote, faStopwatch } from '@fortawesome/free-solid-svg-icons'


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
          <FontAwesomeIcon icon={faCalendarDay} />
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
          <FontAwesomeIcon icon={faRunning} />
          {props.review.title}
        </CardSubtitle>
        <CardText>
        <FontAwesomeIcon icon={faStopwatch} />
          {props.review.user_username}
        </CardText>
        <CardText>
        <FontAwesomeIcon icon={faStickyNote} />
          {props.review.content}
        </CardText>
        <CardText>
        <FontAwesomeIcon icon={faStickyNote} />
          {props.review.rating}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default ReviewCard;