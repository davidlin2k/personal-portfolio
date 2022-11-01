import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { ParticlesContainer } from "../components/ParticlesContainer.tsx";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact David";  
    }, []);

    return (
        <div className="contact-page">
            <Navbar activeLink="CONTACT"/>
            <ParticlesContainer />      
            <ContactForm />
        </div>
    );
}

export default Contact;