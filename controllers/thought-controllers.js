const Thought = require('../models/Thought');
const User = require('../models/User');

const thoughtController = {

  createThought({ params, body }, res) {
    const thought = new Thought(body)
    thought.user = params.userId
    Thought.create(thought)
    .then(dbThoughtData => {
      User.findOneAndUpdate({ _id: params.userId }, {$push: { thoughts: thought._id } }, { new: true })
      .then(() => { res.json(dbThoughtData)})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  },
  getAllThoughts(req, res) {
    Thought.find({})
    .select(['-__v'])
    .populate({path: 'user', select: ['-thoughts', '-__v', '-email']})
    .then(dbThoughtData => {
      res.json(dbThoughtData)})
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  },
  getThought({ params } , res) {
    Thought.findOne({ _id: params.thoughtId })
    .select('-__v')
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        res.status(404).json({message: 'No thought found with this id!'});
        return;
      }
       res.json(dbThoughtData);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500).json(err);
    });
  },
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body)
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        res.status(404).json({message: 'No thought found with this id!'});
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => {
      res.sendStatus(500).json(err);
    })
  },
  deleteThought({ params }, res) {
    Thought.findByIdAndDelete(params.thoughtId)
    .then(dbThoughtData => {
      if(!dbThoughtData) {
        res.status(404).json({ message: "No thought found with that id!"})
        return;
      }
      User.findOneAndUpdate({_id: dbThoughtData.user}, {$pull: { thoughts: params.thoughtId } }, {new: true })
      .then(() => {
        res.json(dbThoughtData)
      })
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500).json(err)
    })
  }
}

module.exports = thoughtController;
  