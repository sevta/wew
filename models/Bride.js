import mongoose from "mongoose";

const BrideSchema = new mongoose.Schema(
  {
    namaPengantinPria: String,
    namaPengantinWanita: String,
    date: String,
    location: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Bride || mongoose.model("Bride", BrideSchema);
