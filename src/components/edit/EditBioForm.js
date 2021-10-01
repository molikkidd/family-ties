import React from "react";
import {Form,Button} from 'react-bootstrap'
const EditBioForm = () => {
    return <div className="editCon">
        <Form>
            <Form.Group>
                <Form.Label>Country:</Form.Label>
                <Form.Control type="text" 
                                placeholder="Abbriviate Country" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control type="date" 
                                placeholder="Edit Email Address" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Occupation:</Form.Label>
                <Form.Control type="text" 
                                placeholder="Edit Occupation" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mobile:</Form.Label>
                <Form.Control type="integer" 
                                placeholder="Edit Mobile Number" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Home Phone </Form.Label>
                <Form.Control type="integer" placeholder="Edit Home Phone" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Click here to submit form
            </Button>
        </Form>
    </div>
}

export default EditBioForm;
