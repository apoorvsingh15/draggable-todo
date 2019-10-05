import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';


const CompletedTodo = () => {

  return(
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className="centered">Completed</Card.Title>
          Completed
      </Card.Body>
    </Card>
  )
}

export default CompletedTodo;