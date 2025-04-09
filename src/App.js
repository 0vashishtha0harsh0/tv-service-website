import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Login from "./components/Login";
import Help from "./components/Help";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <div className="App">
      <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem", padding: 0, margin: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/ticket-form">Ticket</Link></li>
        </ul>
      </nav>

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/ticket-form" element={<TicketForm />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
