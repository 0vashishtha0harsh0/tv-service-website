import React, { useState } from "react";
import axios from "axios";
import "./TicketForm.css"; // Ensure this file exists in the same folder

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, query } = formData;

    if (!name || !email || !query) {
      setError("Please fill in all fields.");
      setMessage("");
      return;
    }

    try {
      await axios.post("https://your-api.vercel.app/submit-ticket", formData);

      setMessage("✅ Ticket submitted successfully!");
      setError("");
      setFormData({ name: "", email: "", query: "" });
    } catch (err) {
      setError("❌ Failed to submit ticket. Please try again later.");
      setMessage("");
    }
  };

  return (
    <div className="ticket-form-container">
      <h2>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit} className="ticket-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Issue:
          <textarea
            name="query"
            placeholder="Describe your issue"
            value={formData.query}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Ticket</button>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TicketForm;
