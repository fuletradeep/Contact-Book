import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../action/ContactAction";
import shortid from 'shortid'
import {useHistory} from 'react-router-dom'

import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddContact() {
    let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const createContact = e => {
    e.preventDefault();
    console.log(name, email, mobile);
    const NEW_CONTACT = {
        id:shortid.generate(),
      name,
      email,
      phone:mobile,
    };
    dispatch(addContact(NEW_CONTACT));
    history.push("/")
  };

  return (
    <div className="container">
      <div className="jumbotron mt-5 bg-warning">
        <Form onSubmit={e => createContact(e)}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="text"
                id="name"
                placeholder="Enter Name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleMobile_No" sm={2}>
              Mobile_No
            </Label>
            <Col sm={10}>
              <Input
                type="Mobile_No"
                name="Mobile_No"
                id="exampleMobile_No"
                placeholder="Mobile_No placeholder"
                onChange={e => setMobile(e.target.value)}
                value={mobile}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              E-mail
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter E-mail"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Col>
          </FormGroup>
          <Button className="mt-3" color="primary">
            {" "}
            ADD
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddContact;
