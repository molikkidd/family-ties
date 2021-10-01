import React from "react";
import {Form,Button} from 'react-bootstrap'
const EditAlbum = () => {
    return <div className="editCon">
        <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your full name:</Form.Label>
                <Form.Control type="text" 
                                placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control type="email" 
                                placeholder="Enter your your email address" />
                </Form.Group>
                <Form.Group>
                <Form.Label>Enter your age:</Form.Label>
                <Form.Control type="number" placeholder="Enter your age" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Click here to submit form
                </Button>
        </Form>
    </div>
}

export default EditAlbum;