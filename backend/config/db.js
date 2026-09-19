const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not set in environment variables. Please add MONGO_URI in your .env file or hosting dashboard.');
    }
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Mongoose 7+ uses these defaults, but being explicit for clarity
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
