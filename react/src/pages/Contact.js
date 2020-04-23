import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/contact", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: document.querySelector('input[name="first-name"]').value,
        lastName: document.querySelector('input[name="last-name"]').value,
        emailAddress: document.querySelector('input[name="email-address"]')
          .value,
        subject: document.querySelector('textarea[name="subject"]').value,
      }),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.json());
      })
      .then(function () {
        //redirect once submitted
        history.push("/submitted");
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      })
   };
    

  return (
    <Form id="contact-form" onSubmit={handleSubmit} loading={loading}>
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

      <Form.TextArea name="subject" label="Message" />

      <Form.Button type="submit">Contact</Form.Button>
    </Form>
  );
}
