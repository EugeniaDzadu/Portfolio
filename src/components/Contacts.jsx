import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/send-email", { name, email, message });
      setSent(true);
      setError("");
    } catch (error) {
      console.error(error);
      setSent(false);
      setError("Failed to send email");
    }
  };

  return (
    <>
      <div id="contact" className="form-1 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Contact details</h2>
              <p className="p-heading">
                For any type of online project please don't hesitate to get in
                touch with me. The fastest way is to send me your message using
                the following email{" "}
                <a className="blue no-line" href="mailto:edzadu6@gmail.com">
                  edzadu6@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="cname"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="label-control" htmlFor="cname">
                    Name
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    id="cemail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label-control" htmlFor="cemail">
                    Email
                  </label>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control-textarea"
                    id="cmessage"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label className="label-control" htmlFor="cmessage">
                    message
                  </label>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    Submit
                  </button>
                </div>
                {sent && <p>Email sent successfully!</p>}
                {error && <p>{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
