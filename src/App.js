import React, { useState } from "react";
import {Container} from "react-bootstrap";
import AllUsers from './Users';
import AddUsers from './AddUsers';
import EditUser from './EditUser';
import './App.css';

const App = () => {
    const userData = [
        {
            id: 1,
            name: "Siam",
            occupation: "Student",
            contactNo: "01620304621"
        },
        {
            id:2,
            name: "Anzir",
            occupation: "Student",
            contactNo: "01620304621"
        },
    ]

    const initialUserState = {id: null ,name:"",occupation:"",contactNo:""};

    const [users,setUsers] = useState(userData);
    const [currentUser, setCurrentUser] = useState(initialUserState);
    const [ editing, setEditing ] = useState(false);

    const addUser = (newUser) => {
        newUser.id = users.length + 1;
        setUsers([...users , newUser]);
    }

    const deleteUser = (userId) => {
        setEditing(false);
        setUsers(users.filter((user) => {
            return user.id !== userId;
        }));
    }

    const clickUpdateButton = (user) => {
        setEditing(true);
        setCurrentUser({id:user.id , name: user.name ,occupation: user.occupation, contactNo: user.contactNo});
    }

    const updateUser = ( id , updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ?  updatedUser  : user)));
    }

    return (
    <Container>
        <div>
            <h1>React Crud App with Hooks</h1>
        </div>
        <div>
            <h5> All Users: </h5>
            <AllUsers users={users}  deleteUser={deleteUser} clickUpdateButton={clickUpdateButton}/>
        </div>
        <div>
            { editing ? (
                <div>
                    <h5> Edit User </h5>
                    <EditUser editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser = {updateUser} />
                </div>

            ) : (
                <div></div>
            )}
        </div>
        <div>
            <h5> Add Users: </h5>
            <AddUsers addUser={addUser}/>
        </div>
    </Container>
  );
}

export default App;
