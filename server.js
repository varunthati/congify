const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary in-memory storage
const submissions = [];

// GET route - Render the form (send error as null initially)
app.get('/', (req, res) => {
  res.render('form', { error: null });
});

// POST route - Handle form submission
app.post('/submit', (req, res) => {
  const { username, email } = req.body;

  // Server-side validation
  if (!username || !email || !email.includes('@')) {
    return res.render('form', { error: 'Please provide a valid name and email address.' });
  }

  // Store data temporarily
  submissions.push({ username, email });

  // Render success result
  res.render('result', { username, email, submissions });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
