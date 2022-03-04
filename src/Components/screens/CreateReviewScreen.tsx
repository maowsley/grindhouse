import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { useState, SyntheticEvent } from 'react';
import APIURL from '../../helpers/enviorment';
import {History} from 'history';
import FormContainer from '../FormContainer/FormContainer'



const CreateReviewScreen = ({history}: any) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState('')
  const [userId, setUserId] = useState('')
  const submitHandler = async(e:SyntheticEvent) => {
    e.preventDefault()



    //backend fetch
    await fetch(`${APIURL}/reviews/create`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
       title,
       content,
       rating,
       userId
      })
    })

    history.push('/DisplayAllReviewScreen')

    console.log("Welcome Back to the GrindHouse")
  }
  return (
    <div className='mainDiv'>
      <FormContainer>
  
  <h1>Post Review about GrindHouse</h1>
  <Form onSubmit={submitHandler}>
    <FormGroup className="my-3" >
      <Label>Title</Label>
      <Input type="text" placeholder="Title of review?"
      
      value={title}
      onChange={e => setTitle(e.target.value)}/>

    </FormGroup>

    <FormGroup className="my-3" >
      <Label>Content</Label>
      <Input type="text" placeholder="Use this space to type review" 
      value={content}
      onChange={e => setContent(e.target.value)}
       />
    </FormGroup>
    <FormGroup className="my-3" >
      <Label>Rating</Label>
      <Input type="number" placeholder="Rating your experince at GrindHouse 1-10" 
      value={rating}
      onChange={e => setRating(e.target.value)}
       />
    </FormGroup>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </FormContainer>
  </div>
  )
}

export default CreateReviewScreen;
