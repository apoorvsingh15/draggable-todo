import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';
const DoingTodo = (props) => {

  return(
    <Card style={{ width: '20rem', paddingBottom: '80px' }}>
       <Card.Title style={{ textAlign: 'center'}}>Doing</Card.Title>
      <Droppable droppableId={props.doingTodo}>
          {(provided) => (
            <Card.Body
              style={{ height: '80px'}}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </Card.Body>
            
           
      )}
      </Droppable>
    </Card>
  )
}

export default DoingTodo;