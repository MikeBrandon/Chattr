const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
    minLength: 3,
    maxLength: 20,
    unique: true,
  },
  email: { type: "string", required: true, unique: true },
  password: {
    type: "string",
    required: true,
    minLength: 8,
  },
  isAvatarImageSet: { type: "boolean", default: false },
  avatarImage: { type: "string", default: "" },
});

export const UserModel = mongoose.model("User", userSchema);
