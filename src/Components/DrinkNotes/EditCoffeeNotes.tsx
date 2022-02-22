import  React, {Component}from 'react';

interface NoteEditProps {
  
}
 
interface NoteEditState {
  Note: string[]
}
 
class NoteEdit extends React.Component<NoteEditProps, NoteEditState> {
  state: NoteEditState = { 
    
    Note : []  
  
  }
  render() { 
    return ( 
      <div>
        <h1>NoteEdit is connected!</h1>
      </div>
     );
  }
}
 
export default NoteEdit;