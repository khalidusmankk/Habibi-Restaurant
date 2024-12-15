import React, { useState } from "react";

export default function Contacts1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true); // Show success message
      setTimeout(() => {
        setSubmitted(false); // Hide message after 3 seconds
      }, 3000);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <>
      <div className="contactBack">
        <h1 className="text-light text-center pt-5" style={{ fontFamily: " Agency FB", fontWeight: "bold" }}>
          Contact Us
        </h1>

        <div className="container bg-light" style={{ height: "670px", marginTop: "165px" }}>
          <h2
            style={{
              marginBottom: "130px",
              paddingTop: "50px",
              fontFamily: "verdana",
            }}
          >
            Contact Us
          </h2>

          {submitted ? (
            <h3 style={{ color: "green" }}>You are welcome!</h3>
          ) : (
            <form className="row" onSubmit={handleSubmit}>
              <label className="mb-4">
                <b>Your Name:</b>
                <br />
                <input
                  className="w-50"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  autoFocus
                />
              </label>
              <br />
              <label className="mb-4">
                <b>Your Email:</b>
                <br />
                <input
                  className="w-50"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
              </label>
              <br />
              <label className="mb-4">
                <b>Subject:</b>
                <br />
                <input
                  className="w-50"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
              </label>
              <br />
              <label className="mb-4">
                <b>Your Message:</b>
                <br />
                <textarea
                  className="w-50"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                ></textarea>
              </label>
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "#0a2e2c",
                  color: "whitesmoke",
                  borderRadius: "5px",
                  width: "80px",
                  height: "60px",
                  fontSize: "20px",
                }}
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
