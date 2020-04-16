import React from "react";
import { Form } from "semantic-ui-react";

export default function Contact(event) {
  event.default;
  const handleSubmit = () => {
    fetch('/contact', {
      method: 'post',
      body: JSON.stringify({
        sunject: document.querySelector('input[name="subject"]').value
      })
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>First Name</label>
        <input type="text" name="first-name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input type="text" name="last-name" />
      </Form.Field>
      <Form.Field>
        <label>Email Address</label>
        <input type="email" name="email-address" />
      </Form.Field>
      <Form.TextArea label="Message" />
      <Form.Button type="submit">Contact</Form.Button>

    </Form>
  );
}
