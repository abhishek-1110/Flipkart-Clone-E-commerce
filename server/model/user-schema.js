import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: true,

  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});
// user is database name in mongodb
const user = mongoose.model("user", userSchema);

export default user;
