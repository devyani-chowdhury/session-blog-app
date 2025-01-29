import { useState } from "react";
import { Form } from 'react-bootstrap';
import './css/CreateForm.css';

function CreateAccount() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [introduction, setIntroduction] = useState("");
  
    const handleSave = () => {
      console.log("Account Created: ", { name, username, email, introduction });
    };
  
    return (
      <div className="page">
      <h1>Create an Account</h1>
      <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="create-account-form">
        <Form.Group controlId="formName" className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formUsername" className="form-group">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formIntroduction" className="form-group">
          <Form.Label>Introduction</Form.Label>
          <Form.Control as="textarea" value={introduction} onChange={(e) => setIntroduction(e.target.value)} />
        </Form.Group>
        <button type="submit" className="SaveButton">Save</button>
        <button type="button" onClick={() => window.location.href = "/"} className="CancelButton">Cancel</button>
      </Form>
      </div>
    );
  }

export default CreateAccount;