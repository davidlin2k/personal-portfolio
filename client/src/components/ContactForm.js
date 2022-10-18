import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, phone: phone, email: email, message: message }),
        };

        fetch('https://www.davidzylin.com/api/write/submitInquiry', requestOptions);
    }

    return (
        <div className="contact-form-container">
            <form onSubmit={onSubmit} id="contact-form">
                <h1 className="contact-me-text">CONTACT ME</h1>
                <TextField className="contact-form-name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField className="contact-form-phone" label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <TextField className="contact-form-email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField className="contact-form-message" label="Message" variant="outlined" onChange={(e) => setMessage(e.target.value)} value={message} multiline rows={5} />
                <Button id="contact-form-submit-button" variant="contained" type="submit" form="contact-form">Submit</Button>
            </form>
        </div>
    );
}

export default ContactForm;