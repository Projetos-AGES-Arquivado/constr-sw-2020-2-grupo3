import mongoose, { ConnectionStates } from 'mongoose'

export default (url: String) => {
  mongoose.connect(`mongodb://${url}/avaliacoes`, {
    authSource: "admin",
    user: "root",
    pass: "DdgIgrp3",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.on('open', function () {
    console.log("Database connected")
  });
  return db;
}

export function status(): String {
  switch (mongoose.connection.readyState) {
    case 0:
      return "disconnected";
    case 1:
      return "connected"
    case 2:
      return "connecting"
    case 3:
      return "disconnecting"
    default:
      return "Unknown"
  }
}

