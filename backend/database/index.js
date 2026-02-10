const mongoose = require("mongoose");

const connectDatabase = async () => {
  console.log("🔄 Tentando conectar no MongoDB...");
  console.log("URI:", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 MongoDB connected");
  } catch (error) {
    console.error("🔴 MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
