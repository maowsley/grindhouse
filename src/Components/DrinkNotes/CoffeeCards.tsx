import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, UncontrolledAlert } from "reactstrap";
import {
  CardBody,
  Card,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import APIURL from '../../helpers/enviorment'





const CoffeeCard = (props: { token: any; fetchNotes: () => any; notes: any[]; editUpdateNote: (arg0: any) => void; updateOn: () => void; }) => {
  const deleteNote = (note: { id: any; }) => {
    console.log(note);
    fetch(`${APIURL}/drinkNote/delete/${note.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    }).then(() => props.fetchNotes());
  };

  

  const noteMapper = () => {
    return props.notes.map((note, index) => {
      return (
        <Card className='card' >
          <CardImg
            alt="Card image cap"
            src='https://static.wixstatic.com/media/5dc197_e4cfe48d4d9b4f09ab00885d5f341c71~mv2.gif'
            top
            width="50%"
          />
          <CardBody className="cardBody">
            <CardTitle tag="h5">{note.title}</CardTitle>
            <CardText>{note.noteBody}</CardText>
            <Button
              className="edit"
              id="warning"
              onClick={() => {
                props.editUpdateNote(note);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              className="delete"
              id='danger'
              onClick={() => {
                const confirmBox = 
                window.confirm(
                "Delete a Note"
                
              )
              if (confirmBox === true) {
                deleteNote(note);
              }}
            }
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <div className="cardGroup" >{noteMapper()}</div>
  );
};

export default CoffeeCard;