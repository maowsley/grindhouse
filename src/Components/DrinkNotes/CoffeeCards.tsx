import * as React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faRunning, faStickyNote, faStopwatch } from '@fortawesome/free-solid-svg-icons'


export interface NoteTableProps {
  note: any;
}

const NoteTable: React.SFC<NoteTableProps> = (props) => {

  

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <FontAwesomeIcon icon={faCalendarDay} />
        </CardTitle>
        <CardSubtitle>
          <FontAwesomeIcon icon={faRunning} />
          {props.note.drinkName}
        </CardSubtitle>
        <CardText>
        <FontAwesomeIcon icon={faStopwatch} />
          {props.note.drinkTemp}
        </CardText>
        <CardText>
        <FontAwesomeIcon icon={faStickyNote} />
          {props.note.content}
        </CardText>
        <CardText>
        <FontAwesomeIcon icon={faStickyNote} />
          {props.note.size}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default NoteTable;