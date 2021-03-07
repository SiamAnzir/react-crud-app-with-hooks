import React,{useState} from "react";
import {Button, Form, Row , Col} from "react-bootstrap";

const EditUser = (props) => {
    const [ updatedUser, setUser ] = useState(props.currentUser);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser({ ...updatedUser , [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateUser(updatedUser.id, updatedUser);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control name="name" required type="text" value={updatedUser.name} onChange={handleInputChange}/>
                </Col>
                <Col>
                    <Form.Control name="occupation" required type="text" value={updatedUser.occupation} onChange={handleInputChange}/>
                </Col>
                <Col>
                    <Form.Control name="contactNo" required type="text" value={updatedUser.contactNo} onChange={handleInputChange}/>
                </Col>
                <Col>
                    <Button variant="success" type="submit">Update User</Button>   <Button variant="danger" onClick={() => props.setEditing(false)}> Cancel </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default EditUser;