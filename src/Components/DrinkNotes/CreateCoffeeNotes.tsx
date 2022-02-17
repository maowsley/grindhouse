import  React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/enviorment';


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
    user_username: " ",
    drinkName: ' ',
    drinkTemp: " ",
    content: ' ',
    size: " "
    

    }

  handleSubmit = (event: React.FormEvent): void => {
    console.log(event)
    event.preventDefault();
    fetch(`${APIURL}/drinkNote/create`, {
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/json', 
        'Authorization': this.props.token
      }),
      body: JSON.stringify({
        log: {
          user_username: this.state.user_username,
          drinkName: this.state.drinkName,
          drinkTemp: this.state.drinkTemp,
          content: this.state.content,
          size: this.state.size
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          user_username: " ",
          drinkName: ' ',
          drinkTemp: ' ',
          content: ' ',
          size: ' '
        });
        this.props.fetchNotes();
      })

  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Never forget a your favorite drink combination. Save your coffee notes below!</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="user_username" />
            <Input onChange={this.handleChange} typeof="user_username" name="user_username" value={this.state.user_username} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="drinkName" />
            <Input onChange={this.handleChange} type="text" name="drinkName" value={this.state.drinkName}>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="drinkTemp" />
            <Input onChange={this.handleChange} typeof="drinkTemp" name="drinkTemp" placeholder="Hot or Cold Drink?" value={this.state.drinkTemp} />
            <option>Hot or Cold Drink?</option>
              <option value="hot">Hot</option>
              <option value="cold">Cold</option>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="notes" />
            <Input onChange={this.handleChange} type="textarea" name="content" placeholder="Notes" value={this.state.content} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="size" />
            <Input onChange={this.handleChange} typeof="size" name="size" placeholder="Small, Medium, Large?" value={this.state.size} />
            <option>Small, Medium or Large?</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
          </FormGroup>
          <Button type="submit">Save Coffee Note</Button>
        </Form>
      </div>
    );
  }
}

export default NotesCreate;