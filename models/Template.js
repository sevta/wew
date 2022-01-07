import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    usedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    status: {
      type: String,
      enum: ["COMMING-SOON", "RELEASED"],
      default: "COMMING-SOON",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Template ||
  mongoose.model("Template", TemplateSchema);
