import React, { useState } from "react";
import "./contactForm.css";
// import { submitForm } from "./submitForm"; //https://www.greatfrontend.com/questions/user-interface/contact-form/v/c2f1019c-a3dc-4ec4-bf4a-5373d8c31357
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("successful submission");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact-form-page-container">
      <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        {" "}
        Going back to home page
      </button>

      {/* <form onSubmit={submitForm} action="https:www.sample.com" method="post"> */}
      <form
        onSubmit={handleSubmit}
        method="post"
        className="contact-form-container"
      >
        <div className="input-area">
          <label htmlFor="name-input" className="label">
            Name
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-area">
          <label htmlFor="email-input" className="label">
            Email
          </label>
          <input
            id="email-input"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-area">
          <label htmlFor="message-input" className="label">
            Message
          </label>
          <textarea
            id="message-input"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
