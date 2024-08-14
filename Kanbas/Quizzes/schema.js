const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },  // courseName
  status: { type: String, required: true },
  dueDate: { type: Date, required: true },
  availableDate: { type: Date, required: true },
  untilDate: { type: Date, required: true },
  points: { type: Number, required: true },
  questionsCount: { type: Number, required: true },
  multipleDates: { type: Boolean, default: false },
  published: { type: Boolean, default: false },
  type: { type: String, required: true }
}, { collection: "quizzes" });

module.exports = Quiz;
