import "./Conatct.css";
import React, { useRef, useState } from "react";
import Nav from '../../components/Navbar/Nav';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cscjpfs", "template_dz61v5o", form.current, {
        publicKey: "UMwtM1Jd3F4vO4HIS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setFname("");
          setLname("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
    <Nav />
      <form onSubmit={sendEmail} ref={form}>
        <div className="contact">
          <h1>Contact Me</h1>

          <p>P.O. Box 13948</p>
          <p>Clermont, FL. 34987</p>
        </div>

        <br />
        <div className="gap">
          <label htmlFor="fName">First Name:</label>

          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Your First Name.."
          />
          <br />
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Your Last Name.."
          />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave Me A Message.."
          ></textarea>
          <br />
          <div className="submitButton">
            <button className="button" label="Submit" type="submit">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="info">
        <button onClick={() => (window.location.href = "954-806-6996")}>
          <img src="src/assets/phone.png" className="phone" />
        </button>
        <img src="src/assets/gmail.png" className="email" />

        <a href="tiearraf85@gmailcom">tiearraf85@gmail.com</a>
      </div>
    </>
  );
};

export default Contact;
