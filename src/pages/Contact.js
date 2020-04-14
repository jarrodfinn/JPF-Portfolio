import React from "react";
import { Form } from "semantic-ui-react";

export default function Contact() {
  return (
    <Form>
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
