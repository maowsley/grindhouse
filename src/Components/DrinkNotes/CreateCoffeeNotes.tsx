import  React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/enviorment';
import './notesDisplay.css';
import {Link} from 'react-router-dom';


export enum Details {
    small,
    large,
    medium,
    hot,
    cold
}

export interface NotesCreateProps {
  token : string,
  fetchNotes? : any
};

export interface NotesCreateState {
  drinkName: string,
  drinkTemp: any,
  content: string,
  size: any,
  user_username: string


}

class NotesCreate extends React.Component<NotesCreateProps, NotesCreateState> {
    state: NotesCreateState = {
    user_username: "",
    drinkName: '',
    drinkTemp: '',
    content: '',
    size: ""
    

    }

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    fetch(`${APIURL}/drinkNote/create`, {
      method: "POST", 
      body: JSON.stringify({
        note: {
          user_username: this.state.user_username,
          drinkName: this.state.drinkName,
          drinkTemp: this.state.drinkTemp,
          content: this.state.content,
          size: this.state.size
        },
      }),
       headers: new Headers({
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${this.props.token}`
      }),
    
      })
    
      .then((res) => res.json())
      .then((noteData) => {
        console.log(noteData);
        this.setState({
          user_username: "",
          drinkName: '',
          drinkTemp: '',
          content: '',
          size: '',
        });
        this.props.fetchNotes();
      });

  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
     
        <div className='notesBac'>
        <Form className='forms' onSubmit={this.handleSubmit}>
        <h3>Never forget your favorite drink combination. Save your coffee notes below!</h3>
          <FormGroup>
            <h5>Username</h5>
            <Label htmlFor="user_username" />
            <Input onChange={this.handleChange} name="user_username" value={this.state.user_username} />
          </FormGroup>
          <FormGroup>
            <h5>Drink Name</h5>
            <Label htmlFor="drinkName" />
            <Input onChange={this.handleChange} type="text" name="drinkName" value={this.state.drinkName}>
            </Input>
          </FormGroup>
          <FormGroup>
            <h5>Hot or Cold?</h5>
            <Label htmlFor="drinkTemp" />
            <Input onChange={this.handleChange} typeof="drinkTemp" name="drinkTemp" placeholder="Hot or Cold Drink?" value={this.state.drinkTemp} />
          </FormGroup>
          <FormGroup>
            <h5>Notes?</h5>
            <Label htmlFor="notes" />
            <Input onChange={this.handleChange} type="textarea" name="content" placeholder="Notes" value={this.state.content} />
          </FormGroup>
          <FormGroup>
            <h5>Small, Medium or Large?</h5>
            <Label htmlFor="size" />
            <Input onChange={this.handleChange} typeof="size" name="size" placeholder="Small, Medium, Large?" value={this.state.size} />
          </FormGroup>
          <Link to='/allNotes'><Button type="submit" className='buttonstyle'>Save Coffee Note</Button></Link>
        </Form>
        </div>
     
    );
  }
}

export default NotesCreate;