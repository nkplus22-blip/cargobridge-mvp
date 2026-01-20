const express = require('express');
const healthRoutes = require('./routes/health');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', healthRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'CargoBridge API running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
