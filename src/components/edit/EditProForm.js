import React, { useState } from "react";
import {Form,Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import setAuthToken from "../../utils/setAuthToken";
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const EditProForm = (props) => {

    // console.log('edit pro form', props.userInfo)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        // prevent page from auto reload on submit
        e.preventDefault();
        // grab auth token from local storage
        const token = localStorage.getItem('jwtToken');
        // if the token is present/true
            if(token) {
                // set token for authenication 
                setAuthToken(token);
                // grab data from the edit form
                const user = {
                    id: props.userInfo.id,
                    firstName: firstName || props.userInfo.firstName,
                    lastName: lastName || props.userInfo.lastName,
                    email: email || props.userInfo.email,
                }
                console.log('edit changes submitted',user)
                // connect to api endpoint
                axios.post(`${REACT_APP_SERVER_URL}/api/users/edit`, user)
                .then(async response => {
                    console.log('response from backend edit', response.data)
                    await props.setCurrentUser(response.data.user);
                    console.log('props user info', props.userInfo)
                    setRedirect(true);
                })
                .catch(error => {
                    console.log(error);
                })
            }
        } 

        // consistently checks if the redirect is true
        if (redirect) return <Redirect to='/profile' />

    return (<div className="editCon">
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" placeholder="Edit First Name"
                 onChange={handleFirstName} />
            </Form.Group>

            <Form.Group>
                <Form.Label>last Name:</Form.Label>
                <Form.Control type="text" placeholder="Edit Last Name"
                onChange={handleLastName}  />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" placeholder="Edit Email Address" 
                onChange={handleEmail} />
            </Form.Group>
    
            <Button variant="primary" type="submit">
            Submit Edits
            </Button>
        </Form>
    </div>)
}

export default EditProForm;