const router = require('express').Router();

const { 
  createThought,
  getAllThoughts,
  getThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controllers')


// api/thoughts
router
.route('/')
.get(getAllThoughts)

// api/thoughts/:userId
router
.route('/:userId')
.post(createThought)


// api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getThought)
.put(updateThought)
.delete(deleteThought)


// api/thoughts/:thoughtId/reactions/:userId
router
.route('/:thoughtId/reactions/:userId')
.post(addReaction)


// api/thoughts/:throughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;