import "./Conatct.css";
import React, { useRef, useState } from "react";
import Nav from '../../components/Navbar/Nav';
import emailjs from "@emailjs/browser";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// Ensure emailjs is initialized correctly
const Contact = () => {
  const form = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
 const [showModal, setShowModal] = useState(false);

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
          setShowModal(true);
        },

        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
    {/* <Nav /> */}
    
      <form onSubmit={sendEmail} ref={form}>
        <div className="title">
        <div className="contact">
          <h1>Contact Me</h1>

          <p>P.O. Box 13948</p>
          <p>Clermont, FL. 34987</p>
        </div>

        <br />       
         <div className="gap">

        <div className="form-group">
          <label htmlFor="fName">First Name:</label>

          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Your First Name.."
          />
          <br />
          </div>
          <div className="form-group">
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Your Last Name.."
          />
          <br />
</div>
<div className='form-group'>
          <label htmlFor="message">Message:</label>
          <textarea
          className='message'
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave Me A Message.."
          ></textarea>
          <br />
          </div>
          <div className="submitButton">
            <button className="button" label="Submit" type="submit">
              {" "}
              Submit
            </button>
          </div>
        </div>
       
        </div>
      </form>

<div className="social-buttons">
  <a href="https://www.linkedin.com/in/tiearra-westbrook-762024351/" target="_blank" rel="noopener nonreferrer">
 <button className='social-btn'><CiLinkedin /> LinkedIn</button>
 </a>
 <a href="https://github.com/tiearraf85">
 <button className='social-btn'><FaGithub /> GitHub</button>
 </a>
 <button className='social-btn'><FaFacebook />Facebook</button> 
</div>
      

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Message Sent!</h2>
            <p>Thank you for contacting me. I'll get back to you soon.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}


    </>
  );
};

export default Contact;
