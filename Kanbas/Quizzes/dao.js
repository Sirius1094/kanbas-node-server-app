const Quiz = require('./model');

// Create a new quiz
const createQuiz = async (quizData) => {
  const quiz = new Quiz(quizData);
  return await quiz.save();
};

// Find quizzes by course name
const findQuizzesByCourse = async (course) => {
  return await Quiz.find({ course });
};

// Find all quizzes
const findAllQuizzes = async () => {
  return await Quiz.find();
};

// Find quiz by ID
const findQuizById = async (id) => {
  return await Quiz.findById(id);
};

// Update quiz by ID
const updateQuizById = async (id, updateData) => {
  return await Quiz.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete quiz by ID
const deleteQuizById = async (id) => {
  return await Quiz.findByIdAndDelete(id);
};

module.exports = {
  createQuiz,
  findQuizzesByCourse,
  findAllQuizzes,
  findQuizById,
  updateQuizById,
  deleteQuizById
};
