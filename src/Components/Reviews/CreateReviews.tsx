import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Component } from 'react';
import APIURL from '../../helpers/enviorment';
import'./CreateReview.css';
import { Link } from 'react-router-dom';

export interface ReviewCreateProps {
  token : string;
  fetchReviews? : any;
}

export interface ReviewCreateState {
  user_id: number,
  user_username: string,
  title: string,
  content: string,
  rating: number,
  created_at: any
 

}

class ReviewsCreate extends React.Component<ReviewCreateProps, ReviewCreateState> {
  state: ReviewCreateState = {
    user_id: 0,
    user_username: ' ',
    title: " ",
    content: ' ',
    rating:0,
    created_at: new Date(),
  
  }

  handleSubmit = (event: React.FormEvent): void => {
    console.log(event)
    event.preventDefault();
    fetch(`${APIURL}/reviews/create`, {
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${this.props.token}`
      }),
      body: JSON.stringify({
        log: {
          user_id: this.state.user_id,
          user_username: this.state.user_username,
          title: this.state.title,
          content: this.state.content,
          rating: this.state.rating,
          created_at: this.state.created_at
        
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          user_id: 0,
          user_username: ' ',
          title: " ",
          content: ' ',
          rating:0,
          created_at: new Date()
     

        });
        this.props.fetchReviews();
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
      
        <Form className='revBack' onSubmit={this.handleSubmit}>
        <h3>Tell the world about GrindHouse!</h3>
          <FormGroup>
            <h3>Date</h3>
            <Label htmlFor="date" />
            <Input onChange={this.handleChange} typeof="any" name="created_at" value={this.state.created_at} />
          </FormGroup>
          <FormGroup>
            <h3>Username</h3>
            <Label htmlFor="user_username" />
            <Input onChange={this.handleChange} type="text" name="user_username" placeholder="Username" value={this.state.user_username} />
          </FormGroup>
          <FormGroup>
            <h3>Title of review</h3>
            <Label htmlFor="title" />
            <Input onChange={this.handleChange} type="text" name="title" placeholder="Name of Review Title" value={this.state.title} />
          </FormGroup>
          <FormGroup>
            <h3>Use space below to write your review</h3>
            <Label htmlFor="content" />
            <Input onChange={this.handleChange} type="textarea" name="content" placeholder="Enter Review" value={this.state.content} />
          </FormGroup>
          <FormGroup>
            <h3>Rating us from 1-10</h3>
            <Label htmlFor="rating" />
            <Input onChange={this.handleChange} type="number" name="rating" placeholder="Rate GrindHouse 1-10" value={this.state.rating} />
          </FormGroup>
          <Button type="submit">Click to Submit Review</Button>
        </Form>
        
      </div>
    );
  }
}

export default ReviewsCreate;