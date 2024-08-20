import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  module: { type: String, required: true }
});

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  course: { type: String, required: true },
  lessons: { type: [lessonSchema], default: [] },
}, { collection: "modules" });

export default moduleSchema;