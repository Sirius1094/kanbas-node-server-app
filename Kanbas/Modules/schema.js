import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: { type: String },
  description: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModel' },
  lessons: [{ type: String }]
}, { collection: "modules" });

export default moduleSchema;
