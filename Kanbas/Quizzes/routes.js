const express = require('express');
const router = express.Router();
const quizDao = require('./dao');

// Create a new quiz
router.post('/:courseId/quizzes', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const quizData = { ...req.body, course: courseId };
    const newQuiz = await quizDao.createQuiz(quizData);
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all quizzes for a course
router.get('/:courseId/quizzes', async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const quizzes = await quizDao.findQuizzesByCourse(courseId);
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all quizzes
router.get('/all', async (req, res) => {
  try {
    const quizzes = await quizDao.findAllQuizzes();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a quiz by ID
router.get('/:id', async (req, res) => {
  try {
    const quiz = await quizDao.findQuizById(req.params.id);
    if (quiz) {
      res.status(200).json(quiz);
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a quiz by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedQuiz = await quizDao.updateQuizById(req.params.id, req.body);
    if (updatedQuiz) {
      res.status(200).json(updatedQuiz);
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a quiz by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedQuiz = await quizDao.deleteQuizById(req.params.id);
    if (deletedQuiz) {
      res.status(200).json({ message: 'Quiz deleted successfully' });
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
