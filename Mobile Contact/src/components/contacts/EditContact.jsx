import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import moduleName from 'module'
import { editContact,updateContact,update_contact } from "../../action/ContactAction";
import shortid from 'shortid'
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'

import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

function EditContact() {
    let {id} = useParams();
    let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact.contact)
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  // const createContact = e => {
  //   e.preventDefault();
  //   console.log(name, email, mobile);
  //   const NEW_CONTACT = {
  //     id:shortid.generate(),
  //     name,
  //     email,
  //     phone:mobile,
  //   };
  //   dispatch(addContact(NEW_CONTACT));
  //   history.push("/")
  // };

  useEffect(() => {
    if(contact!==null){
      setName(contact.name);
      setMobile(contact.phone);
      setEmail(contact.email);
    }
      dispatch(editContact(id))
  },[contact])

const onUpdateContact = (e) => {
  e.preventDefault();

  const update_contact = Object.assign(contact,{name:name,email:email,phone:mobile})
dispatch(updateContact(update_contact))
history.push("/");
}

  return (
    <div className="container">
      <div className="jumbotron mt-5 bg-warning">
        <Form onSubmit={e=>onUpdateContact(e)}>
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
            ADD
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditContact;
