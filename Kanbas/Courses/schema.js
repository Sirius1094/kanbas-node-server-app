import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  number: { type: String },
  name: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  department: String,
  credits: Number,
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { collection: "courses" });

export default courseSchema;
