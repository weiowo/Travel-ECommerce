import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(
      `${process.env.MONGODB_URI}/ecommerce`,
      opts
    );
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
