const mongoose = require("mongoose");

async function connectToDb() {
  try {
    const con = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDb connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDb;
