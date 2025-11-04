const express = require("express");
const app = express();
const port = 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route - Form Page
app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required /><br><br>

      <label>Email:</label>
      <input type="email" name="email" required /><br><br>

      <label>Age:</label>
      <input type="number" name="age" required /><br><br>

      <label>Password:</label>
      <input type="password" name="password" required /><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Form Submit Route
app.post("/submit", (req, res) => {
  const { name, email, age, password } = req.body;
  res.send(`
    <h2>Form submitted successfully!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Password:</strong> ${password}</p>
  `);
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});