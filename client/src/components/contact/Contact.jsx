import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    subject: "",
    details: "",
  });

  const check = useRef();
  const execute = useRef();

  const checkHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    //Send The form to the database
    emailjs
      .sendForm("service_3d4ed3l", "template_cyjqayc", execute.current, {
        publicKey: "FB-BBre2HnwtUqctD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    //Clear the Form
    setValues({
      username: "",
      email: "",
      subject: "",
      details: "",
    });
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact.</h2>
      <div className="contact-detail">
        <div className="left">
          <div className="chat">
            <h1>Let's chat.</h1>
            <h1>Tell me about your</h1>
            <h1>project.</h1>
            <p>Let's create something togdhether</p>
            <div className="mail-me">
              <div className="image">
                <img
                  src={`${process.env.PUBLIC_URL}/photes/instagram.png`}
                  alt="contact"
                />
              </div>
              <div>
                <h2>Mail me at</h2>
                <a href="/gmail.com">el.mga.su@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form ref={execute} onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Full name"
              value={values.username}
              onChange={checkHandler}
            />
            <input
              type="Email"
              name="email"
              placeholder="Email address"
              value={values.email}
              onChange={checkHandler}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={values.subject}
              onChange={checkHandler}
            />
            <p>Tell me about your project*</p>
            <textarea
              name="details"
              value={values.details}
              onChange={checkHandler}
            ></textarea>
            <button>Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
