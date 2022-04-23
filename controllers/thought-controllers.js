const Thought = require('../models/Thought');
const User = require('../models/User');

const thoughtController = {
  // create new thought
  createThought({ params, body }, res) {
    
    const thought = new Thought(body)
    
    thought.user = params.userId
    
    Thought.create(thought)
    .then(dbThoughtData => {
      User.findOneAndUpdate({ _id: params.userId }, {$push: { thoughts: thought._id } }, { new: true })
      .then(userData => {
        console.log(userData);
      })
      res.json(dbThoughtData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  },

  // get all users
  getAllThoughts(req, res) {
    Thought.find({})
      // .populate({
      //   path: 'comments',
      //   select: '-__v'
      // })
      .select('-__v')
      // .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },


}

module.exports = thoughtController;
  