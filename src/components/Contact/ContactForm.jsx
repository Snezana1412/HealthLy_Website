import { Button, FormControl, FormHelperText, Input } from "@mui/material";
import { useState } from "react";

function ContactForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [nameTextError, setNameTextError] = useState("");
  const [emailTextError, setEmailTextError] = useState("");
  const [messageTextError, setMessageTextError] = useState("");
  const [messageSent, setMessageSent] = useState("");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateName = () => {
    if (contact.name === "") {
      setNameError(true);
      setNameTextError("The field is required!");
    } else {
      setNameError(false);
      setNameTextError("");
    }
  };
  const validateEmail = () => {
    if (contact.email === "") {
      setEmailError(true);
      setEmailTextError("The field is required!");
    } else {
      setEmailError(false);
      setEmailTextError("");
    }
  };
  const validateMessage = () => {
    if (contact.message === "") {
      setMessageError(true);
      setMessageTextError("The field is required!");
    } else {
      setMessageError(false);
      setMessageTextError("");
    }
  };
  const validateForm = () => {
    validateName();
    validateEmail();
    validateMessage();
  };

  const onSubmitHandler = (e) => {
    // return (e) => {
    e.preventDefault();
    validateForm();
    if (contact.name && contact.email && contact.message) {
      setMessageSent("Message sent successfully!");
      console.log(contact);
      setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      e.target.reset();
    } else {
      setMessageSent("Please fill in the required fields!");
    }
  };
  return (
    <form onSubmit={() => onSubmitHandler(event)}>
      <h4>{messageSent}</h4>
      <FormControl fullWidth={true} variant='standard'>
        <Input
          id='name'
          placeholder='Your Name*'
          aria-describedby='name-error'
          name='name'
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          error={nameError}
        />
        <FormHelperText className='error' id='name-error'>
          {nameTextError}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth={true} variant='standard'>
        <Input
          id='email'
          name='email'
          placeholder='Email Address*'
          aria-describedby='email-error'
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          error={emailError}
        />
        <FormHelperText className='error' id='email-error'>
          {emailTextError}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth={true} variant='standard'>
        <Input
          id='subject'
          placeholder='Your Subject'
          onChange={(e) => setContact({ ...contact, subject: e.target.value })}
          name='subject'
        />
      </FormControl>
      <FormControl fullWidth={true} variant='standard'>
        <Input
          id='message'
          placeholder='Write Message*'
          aria-describedby='message-error'
          multiline={true}
          minRows={4}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
          name='message'
          error={messageError}
        />
        <FormHelperText className='error' id='message-error'>
          {messageTextError}
        </FormHelperText>
      </FormControl>
      <Button className='contact-btn' type='submit'>
        Send message
      </Button>
    </form>
  );
}

export default ContactForm;
