import * as React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export interface NoteTableProps {
  note: any;
}

const NoteTable: React.SFC<NoteTableProps> = (props) => {

  

  return (
    <Card>
      <CardBody>
        <CardTitle>
      
        </CardTitle>
        <CardSubtitle>
        
          {props.note.drinkName}
        </CardSubtitle>
        <CardText>
     
          {props.note.drinkTemp}
        </CardText>
        <CardText>
   
          {props.note.content}
        </CardText>
        <CardText>
      
          {props.note.size}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default NoteTable;