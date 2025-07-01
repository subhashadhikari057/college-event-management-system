// src/main.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON requests

// Test route
app.get('/api/health', (_req, res) => {
  res.json({ message: '✅ Server is running' });
});

// Mount other routes here later:
// app.use('/api/events', eventRoutes);
// app.use('/api/auth', authRoutes);

export default app;
