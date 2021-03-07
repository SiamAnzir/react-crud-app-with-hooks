import React, {useState} from "react";
import {Button, Col , Form , Row} from "react-bootstrap";

const AddUsers = (props) => {

    const initialState = { id:null, name:"",occupation:"",contactNo:""}

    const [user,setUser] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addUser(user);
        event.target.reset();
    }

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({...user , [name]:value});
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={handleInputChange} />
                </Col>
                <Col>
                    <Form.Control name="occupation" autoComplete="off" placeholder="Enter occupation" required type="text" onChange={handleInputChange}/>
                </Col>
                <Col>
                    <Form.Control name="contactNo" autoComplete="off" placeholder="Enter Contact no." required type="number" onChange={handleInputChange}/>
                </Col>
                <Col>
                    <Button variant="success" type="submit">Add New User</Button>
                </Col>
            </Row>
        </Form>
    )


}

export default AddUsers;