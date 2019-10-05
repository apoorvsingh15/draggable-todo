import React, { useState } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';


const List = ({ listItem, setListItems , listItems, onSaveClick, onPressEnter }) => {
  
  const [editedList, setEditedList] = useState(listItem);
  const [editMode, setEditMode] = useState(false);

  const handleEditChange = event => {
    setEditedList({id: listItem.id, text: event.target.value});
  }

  const onEditClick = () => {
    setEditMode(!editMode);
  }

  

  return(
    <Card className="list-style">
    
    <Row>
      <Col lg={8} md={8}>
        {
          editMode ? 
            <Form.Control 
            type="text" 
            placeholder="Add Todo" 
            value={editedList.text}
            onChange={handleEditChange}
            onKeyDown={event => {return onPressEnter(event,listItem.id, editedList.text), event.key === 'Enter' && setEditMode(!editMode)}}
          /> 
        : 
          <p>{listItem.text}</p>
        }
      </Col>
      <Col className="edit-button" lg={2} md={2}>
        <Button onClick={editMode ? () => {return onSaveClick( listItem.id, editedList.text), setEditMode(!editMode)} : onEditClick} variant={editMode ? 'primary' : 'warning'}>{
          editMode ? "Save" : "Edit"
        }</Button>
      </Col>
    </Row>
    </Card>
  )
}

export default List;
