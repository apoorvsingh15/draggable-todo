import React, { useRef } from 'react';
import { Card, Form } from 'react-bootstrap';
import List from './List';

import { Droppable } from 'react-beautiful-dnd';
const AddTodo = props => {

  const ref = useRef(null);

  return(
    <Card style={{ width: '20rem', paddingBottom: '50px', margin: '0 auto' }}>
      <Card.Body>
        <Card.Title className="centered">Add Todo</Card.Title>
        <Form.Control 
          type="text" 
          placeholder="Add Todo" 
          value={props.todoText}
          onChange={props.handleChange}
          onKeyDown={props.handleKeyDown}
        /> 
        
        <Droppable droppableId={props.addTodo}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
          {provided.placeholder}
            {props.listItems.map((listItem, key) => 
              <List 
                key={key} 
                index={key}
                listItem={listItem} 
                setListItems={props.setListItems}
                listItems={props.listItems}
                onSaveClick={props.onSaveClick}
                onPressEnter={props.onPressEnter}
              />
            )} 
          </div>
        )}
        </Droppable>
      </Card.Body>
    </Card>
  )
}

export default AddTodo;