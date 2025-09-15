const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const response = await fetch('http://localhost:5000/api/skills');
const data = await response.json();
return data;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory database (replace with a real database in production)
let skills = [];

// Routes
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.post('/api/skills', (req, res) => {
  const newSkill = {
    id: Date.now().toString(),
    ...req.body,
    dateAdded: new Date().toISOString()
  };
  skills.push(newSkill);
  res.status(201).json(newSkill);
});

app.put('/api/skills/:id', (req, res) => {
  const id = req.params.id;
  const index = skills.findIndex(skill => skill.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Skill not found' });
  }
  
  skills[index] = { ...skills[index], ...req.body };
  res.json(skills[index]);
});

app.delete('/api/skills/:id', (req, res) => {
  const id = req.params.id;
  const index = skills.findIndex(skill => skill.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Skill not found' });
  }
  
  skills.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
