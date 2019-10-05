import React from 'react';
import AddTodo from './components/AddTodo';
import DoingTodo from './components/DoingTodo';
import CompletedTodo from './components/CompletedTodo';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <h1 className="centered">Draggable Todo</h1>
      <Row>
        <Col>
          <AddTodo />
        </Col>
        <Col>
          <DoingTodo />
        </Col>
        <Col>
          <CompletedTodo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
