import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import List from './List';
import _ from 'lodash';

const AddTodo = () => {

  const [todoText, setTodoText] = useState('');
  const [listItems, setListItems] = useState([]);
 
  // change handler for todo text

  const handleChange = event => {
    setTodoText(event.target.value);
  }

  // function which manages enter press

  const handleKeyDown = event => {
    if(event.key === 'Enter'){

      // change to what we want to do on enter press
     
      setListItems([...listItems, {id: Date.now(), text: todoText}])
      
      setTodoText('');
    }
  } 

  // Saves edit on button press

  const onSaveClick = (id, editedText) => {
   
    
    const index = _.findIndex(listItems, {id});
    
    listItems.splice(index, 1, {id, text: editedText});
   
    setListItems([...listItems]);
  
  }

  // Saves edit on enter press

  const onPressEnter = (event, id, editedText) => {
    if(event.key === 'Enter'){
    
    const index = _.findIndex(listItems, {id});
    
    listItems.splice(index, 1, {id, text: editedText});
    
    setListItems([...listItems]);
  }
  
  }

  // to determine the mode of todo list - edit and normal
  // enables user to edit todo going in edit mode

  return(
    <Card style={{ width: '20rem' }}>
   
      <Card.Body>
        <Card.Title className="centered">Add Todo</Card.Title>
        <Form.Control 
          type="text" 
          placeholder="Add Todo" 
          value={todoText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        /> 
        {listItems.map((listItem, key) => 
          <List 
            key={key} 
            listItem={listItem} 
            setListItems={setListItems}
            listItems={listItems}
            onSaveClick={onSaveClick}
            onPressEnter={onPressEnter}
          />
        )
        }
        
      </Card.Body>
    </Card>
  )
}

export default AddTodo;