import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-wavkl3r-shard-00-00.r44f1gh.mongodb.net:27017,ac-wavkl3r-shard-00-01.r44f1gh.mongodb.net:27017,ac-wavkl3r-shard-00-02.r44f1gh.mongodb.net:27017/?ssl=true&replicaSet=atlas-q386v3-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
    console.log("Database connected successfully")
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};
export default Connection;