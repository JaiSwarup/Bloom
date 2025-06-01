import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    try {
      if (this.connection) {
        return this.connection;
      }

      const options = {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4,
      };

      this.connection = await mongoose.connect(
        process.env.MONGODB_URI,
        options
      );

      console.log("✅ Connected to MongoDB successfully");

      // Handle connection events
      mongoose.connection.on("error", (err) => {
        console.error("❌ MongoDB connection error:", err);
      });

      mongoose.connection.on("disconnected", () => {
        console.log("⚠️ MongoDB disconnected");
      });

      process.on("SIGINT", this.gracefulShutdown);
      process.on("SIGTERM", this.gracefulShutdown);

      return this.connection;
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
      process.exit(1);
    }
  }

  async disconnect() {
    if (this.connection) {
      await mongoose.connection.close();
      this.connection = null;
      console.log("📴 MongoDB connection closed");
    }
  }

  gracefulShutdown = async (signal) => {
    console.log(`\n⚠️ Received ${signal}. Graceful shutdown initiated...`);
    await this.disconnect();
    process.exit(0);
  };

  getConnectionState() {
    return mongoose.connection.readyState;
  }

  isConnected() {
    return this.getConnectionState() === 1;
  }
}

export default new Database();
