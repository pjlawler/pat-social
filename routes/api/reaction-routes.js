const router = require('express').Router();

const {
    getReaction,
    addReaction,
    updateReaction,
    deleteReaction
} = require('../../controllers/reaction-controllers')

router
.route('/:userId/:thoughtId')
.post(addReaction)

router
.route('/:thoughtId/:reactionId')
.delete(deleteReaction)


module.exports = router;