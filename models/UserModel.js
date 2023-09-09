import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isVerified: Boolean,
  verificationToken: String,
});

const User = mongoose.model("User", userSchema);

export default User;
