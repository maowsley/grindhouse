import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { useState, SyntheticEvent } from 'react';
import APIURL from '../../helpers/enviorment';
import {History} from 'history';
import FormContainer from '../FormContainer/FormContainer'



const CreateNoteScreen = ({history}: any) => {

  const [drinkName, setDrinkName] = useState('')
  const [drinkTemp, setDrinkTemp] = useState('')
  const [content, setContent] = useState('')
  const [drinkSize, setDrinkSize] = useState('')

  const submitHandler = async(e:SyntheticEvent) => {
    e.preventDefault()



    //backend fetch
    await fetch(`${APIURL}/drinkNote/create`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        drinkName,
        drinkTemp,
        content,
        drinkSize
      })
    })

    history.push('/DisplayAllNoteScreen')

    console.log("Drink Note Created")
  }
  return (
    <div className='mainDiv'>
      <FormContainer>
  
  <h1>Create a Drink Note </h1>
  <Form onSubmit={submitHandler}>
    <FormGroup className="my-3" >
      <Label>Drink Title</Label>
      <Input type="text" placeholder="what is the name of your drink?"
      
      value={drinkName}
      onChange={e => setDrinkName(e.target.value)}
      />

    </FormGroup>

    <FormGroup className="my-3" >
      <Label>Drink Tempertuaure</Label>
      <Input type="text" placeholder="hot or cold drink?" 
      value={drinkTemp}
      onChange={e => setDrinkTemp(e.target.value)}
       />
    </FormGroup>
    <FormGroup className="my-3" >
      <Label>Note</Label>
      <Input type="text" placeholder="type your drink note here" 
      value={content}
      onChange={e => setContent(e.target.value)}
       />
    </FormGroup>
    <FormGroup className="my-3" >
      <Label>Drink Size</Label>
      <Input type="text" placeholder="small, medium or large drink?" 
      value={drinkSize}
      onChange={e => setDrinkSize(e.target.value)}
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

export default CreateNoteScreen;