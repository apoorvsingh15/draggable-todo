import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';

const CompletedTodo = (props) => {

  return(
    <Card style={{ width: '20rem', paddingBottom: '80px'  }}>
    <Card.Title className="centered">Completed</Card.Title>
      <Droppable droppableId={props.completedTodo}>
        {(provided) => (
          <Card.Body
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

export default CompletedTodo;