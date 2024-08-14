const mongoose = require('mongoose');
const quizSchema = require('./schema');
const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
