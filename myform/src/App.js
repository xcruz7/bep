import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        /><br /><br />

        <input 
          type="email" 
          name="email" 
          placeholder="Enter Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        /><br /><br />

        <input 
          type="number" 
          name="age" 
          placeholder="Enter Age" 
          value={formData.age}
          onChange={handleChange} 
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
