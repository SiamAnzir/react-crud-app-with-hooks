import React from "react";
import {Button, Table} from "react-bootstrap";


const AllUsers = (props) => {

    const userList = props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id} style={{textAlign:"center"}}>
                    <td>{user.name}</td>
                    <td>{user.occupation}</td>
                    <td>{user.contactNo}</td>
                    <td><Button variant="primary" type="submit" onClick={() => props.clickUpdateButton(user)}>Update</Button>  ||  <Button variant="danger" onClick={() =>  props.deleteUser(user.id)}>Delete</Button> </td>
                </tr>
            ))
           ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
    )

    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr style={{textAlign:"center"}}>
                    <td> Name </td>
                    <td> Occupation </td>
                    <td> Contact No. </td>
                    <td> Actions </td>
                </tr>
            </thead>
            <tbody>
                { userList }
            </tbody>
        </Table>
    )
}

export default AllUsers;

/** */