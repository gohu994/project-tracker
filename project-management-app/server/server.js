const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const phaseRoutes = require('./routes/phaseRoutes');
const mactoTaskRoutes = require('./routes/mactoTaskRoutes');

dotenv.config();
connectDB();
const cors = require('cors');
const app = express();

// Configure CORS
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/phases', phaseRoutes);
app.use('/api/tasks', mactoTaskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
