
const User = require('../models/User');

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
    User.findOne({
      _id: params.id
    })
    .select('-__v')
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
    User.findOneAndDelete({_id: params.id })
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
  addFriend({ params }, res) {
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
  




