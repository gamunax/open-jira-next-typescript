import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log('Usando conexion anterior');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect('mongodb://localhost:27017/entriesDB');
  mongooConnection.isConnected = 1;
  console.log('Already connected to MongoDB');
};

export const disconnect = async () => {
  if (mongooConnection.isConnected === 0) {
    console.log('Not connected to MongoDB');
    return;
  }

  await mongoose.disconnect();
  mongooConnection.isConnected = 0;
};
