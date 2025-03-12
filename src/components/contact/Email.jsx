import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  console.log("that is good");
  const form = useRef();
  const nem = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(nem.current);

    emailjs
      .sendForm("service_3d4ed3l", "template_cyjqayc", form.current, {
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
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input ref={nem} type="text" name="name" />
      {/* <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" /> */}
      <input type="submit" value="Send" />
    </form>
  );
};
