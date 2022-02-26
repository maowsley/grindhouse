import   React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import NotesCreate from './CreateCoffeeNotes';

import APIURL from '../../helpers/enviorment';
import CoffeeCard from './CoffeeCards';
import './notesDisplay.css';






interface NotesIndexDetails {
  
  notes: Array<any>;
  updateActive: boolean,
  noteToUpdate: Object,
  noteToDelete: Object,
  deleteActive: boolean
  temp: Array<any>,
  sizeN: Array<any>
}

interface IProps {
  token: string;
}

export default class NoteIndex extends React.Component<IProps, NotesIndexDetails> {
  state: NotesIndexDetails = {
    notes: [],
    updateActive: false,
    noteToUpdate: {},
    noteToDelete: {},
    deleteActive: false,
    temp: [],
    sizeN: []
  }
   
  fetchNotes = ()  => {
    let requestHeaders: any = {
      'Content-Type': 'application/json',
      'Authorization': this.props.token
    }
    fetch(`${APIURL}/drinkNote/getAll/`, {
      method: 'GET',
      headers: requestHeaders
    })
      .then((res) => res.json())
      .then((notesData) => {
        console.log(notesData.notes);
        this.setState({ notes: notesData.notes })
      })

  };

 fetchTemp = (): void => {
     let requestHeaders: any = {
        'Content-Type': 'application/json',
        'Authorization': this.props.token  
     }
     fetch(`${APIURL}/drinkNote/temp/:drinkTemp`, {
        method: 'GET',
        headers: requestHeaders
      })
      .then((res) => res.json())
      .then((tempData) => {
        console.log(tempData.notes);
        this.setState({ notes: tempData.temp })
      })
 }

 fetchSize = (): void => {
    let requestHeaders: any = {
       'Content-Type': 'application/json',
       'Authorization': this.props.token 
    }
    fetch(`${APIURL}/drinkNote/size/:size`, {
       method: 'GET',
       headers: requestHeaders
     })
     .then((res) => res.json())
     .then((sizeNData) => {
       console.log(sizeNData.notes);
       this.setState({ notes: sizeNData.sizeN })
     })
}
deleteNote = (): void => {
  let requestHeaders: any = {
      'Content-Type': 'application/json',
      'Authorization': this.props.token
    }

  fetch(`${APIURL}/drinkNote/delete/:drinkNote_id`, {
      method: "DELETE",
      headers: requestHeaders
     
   })
   .then((res) => res.json())
   .then((deleteData) => {
     console.log(deleteData.note);
     this.setState({ notes: deleteData.note })
   })
}

editNote = (): void => {
  let requestHeaders: any = {
    'Content-Type': 'application/json',
    'Authorization': this.props.token
  }
  fetch(`${APIURL}/drinkNote/edit:drinkNote_id`, {
    method: "PUT",
    headers: requestHeaders
   
 })
 .then((res) => res.json())
 .then((editData) => {
   console.log(editData.note);
   this.setState({ notes: editData.note })
 })

}




  componentDidMount(): void {
    this.fetchNotes();
  }

  componentWillUnmount(): void {
    this.deleteNote();
}
  editUpdateNotes = (notes: any) : void => {
      console.log(notes);
      this.setState({noteToUpdate: !this.state.updateActive})
  };

  noteToDelete = (note:any) : void => {
    console.log(note);
    this.setState({noteToDelete: note})
    }


    deleteToggle = (): void => {
      this.setState({deleteActive: !this.state.deleteActive })
  }

    updateToggle = (): void => {
    this.setState({ updateActive: !this.state.updateActive })
  };



  render() {
    return (
      <div className='notesBac'>
      <Container>
       <NoteIndex token={this.props.token} />
        <Row>
          <Col md="3">
            <NotesCreate fetchNotes={this.fetchNotes} token={this.props.token} />
          </Col>
          <Col md="9">
          
          </Col>
        </Row>
      </Container>
      </div>
     
    );
  }
 
  
  
};