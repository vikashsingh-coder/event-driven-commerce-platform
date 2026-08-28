import mongoose from 'mongoose';

export async function checkMongoDB(): Promise<void> {
  const connection = mongoose.connection;

  if (!connection.db) {
    throw new Error('MongoDB connection is not ready');
  }

  await connection.db.command({
    ping: 1,
  });
}
