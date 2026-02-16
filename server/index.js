require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const express = require('express');
const cors = require('cors');

// Import route handlers
const contactRoutes = require('./routes/contact');
const collaborateRoutes = require('./routes/collaborate');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use('/api/contact', contactRoutes);
app.use('/api/collaborate', collaborateRoutes);

app.get("/", (req, res) => res.send("Digigrow Backend is alive!"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
