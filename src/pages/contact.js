import React from "react"
import "./estilo.css"
import {Form, Button} from 'react-bootstrap'
import PrimaryLayout from "../layouts/PrimaryLayout"
export default () => (
<PrimaryLayout colum="col-6">
    <div className="pt-5">
        <h2>Contact Us</h2>
            <Form>
            <Form.Group controlId="contactForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="contactForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="subject" placeholder="Subject..." />
            </Form.Group>
            <Form.Group controlId="contactForm.ControlTextarea1">
                <Form.Label>textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="contactForm.controlButton">
                <Button>Submit</Button>
            </Form.Group>
            </Form>
        </div>
</PrimaryLayout>
);
