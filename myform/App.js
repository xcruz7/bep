import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Update state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form Submitted ✅\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
