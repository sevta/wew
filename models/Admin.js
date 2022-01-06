import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
