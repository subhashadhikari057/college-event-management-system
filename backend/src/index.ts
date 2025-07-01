// src/index.ts

import mongoose from 'mongoose';
import app from './main';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI not defined in .env');
  process.exit(1);
}

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });
