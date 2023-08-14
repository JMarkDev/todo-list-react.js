import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from 'react-bootstrap/Form';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Date"] = taskDate
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text" value = {taskName} onChange = {(e) => setTaskName(e.target.value)} name = "taskName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <textarea rows = "5" className = "form-control" value = {description} onChange = {(e) => setDescription(e.target.value)} name = "description"></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="yyyy/mm/dd" value = {taskDate} onChange = {(e) => setTaskDate(e.target.value)} name = "taskDate" />
                </Form.Group>
            </Form>

            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;