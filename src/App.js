import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import DoingTodo from './components/DoingTodo';
import CompletedTodo from './components/CompletedTodo';
import { Container, Row, Col } from 'react-bootstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import _ from 'lodash';
import './App.css';

function App() {

  const [ columnName, setColumnName ] = useState(['addTodo', 'doingTodo', 'completedTodo'])
  const [todoText, setTodoText] = useState('');
  const [listItems, setListItems] = useState([]);


  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if(!destination){
      return;
    }

    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){
      return;
    }

    const newListItems = Array.from(listItems);
    let removed = newListItems.splice(source.index, 1);
    newListItems.splice(destination.index, 0, ...removed)
    
    setListItems(newListItems);
    
  }

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



  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <Container >
        <h1 className="centered">Draggable Todo</h1>
       
            <AddTodo 
              addTodo={columnName[0]}
              listItems={listItems}
              todoText={todoText}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              onSaveClick={onSaveClick}
              onPressEnter={onPressEnter}
            />
        
          {/* <Col>
            <DoingTodo doingTodo={columnName[1]}/>
          </Col>
          <Col>
            <CompletedTodo completedTodo={columnName[2]}/>
          </Col> */}
       
      </Container>
    </DragDropContext>
  );
}

export default App;
