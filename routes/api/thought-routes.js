const router = require('express').Router();

const { 
  createThought,
  getAllThoughts,
  getThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controllers')

// api/users
router
.route('/')
.get(getAllThoughts)

router
.route('/:userId')
.post(createThought)

// api/users/:id
// router
// .route('/:id')
// .get(getThought)
// .put(updateThought)
// .delete(deleteThought)


module.exports = router;