
const User = require('../models/User');
const Thought = require('../models/Thought');

const userController = {
  createUser({ body }, res) {
    const user = new User(body)
    User.create(user)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  },
  getAllUsers(req, res) {
    // finds all users in the database and populates the thoughts and friends arrays with their respective model data
      User.find({})
      .select('-__v')
      .populate([
        { path: 'thoughts', select:['-__v', '-user'] },
        { path: 'friends', select:['-__v', '-thoughts']}
    ])
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  getUser({ params }, res) {
    // gest a specific user based on the passed in userId in the params
    User.findOne({ _id: params.id })
    .select('-__v')
    .populate([
      { path: 'thoughts', select:['-__v', '-user'] },
      { path: 'friends', select:['-__v', '-thoughts']}
    ])
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  },
  updateUser({ params, body }, res) {
    // updates a user based on the userId
    User.findOneAndUpdate({_id: params.id}, body, { new: true, runValidators: true })
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  },
  deleteUser({ params }, res) {
    // deletes a particular user based on the passed in userId in the req.params
    User.findById({_id: params.id})
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
      // if the user to be deleted has associated thoughts, those will be deleted before the user is deleted
       return dbUserData.thoughts.forEach( async thought => {
       await Thought.findByIdAndDelete(thought)
      })
    })
    .then(() => User.findOneAndDelete({_id: params.id }))
    .then(dbUserData => res.json({message: `${dbUserData.username} and their thoughts have been deleted!`}))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  },
  addFriend({ params }, res) {
    // adds the userId of the friend to the user's friends array
    User.findOneAndUpdate({_id: params.userId}, { $push: { friends: params.friendId } }, { new: true })
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: "No user found with this id!"});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      res.sendStatus(500);
    });
  },
  removeFriend({ params }, res) {
    // removes the friend's userId from user's friends array
    User.findOneAndUpdate({_id: params.userId}, {$pull: { friends: params.friendId } }, {new: true })
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(404).json({ message: "No user found with this id!"});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      res.sendStatus(500)
    });
  }
}

module.exports = userController;
  




