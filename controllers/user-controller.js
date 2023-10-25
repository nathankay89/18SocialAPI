// user-controller.js
const { User } = require('../models/user');

const userController = {
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  },
  // Update a user by ID
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a user by ID
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        // Bonus: Remove user's associated thoughts when deleted
        // You'll need to define the Thought model for this
        return Thought.deleteMany({ _id: { $in: user.thoughts } });
      })
      .then(() => res.json({ message: 'User and associated thoughts deleted' }))
      .catch((err) => res.status(400).json(err));
  },
  // Add a friend to a user's friend list
  addFriend(req, res) {
    User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendId } }, { new: true })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } }, { new: true })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
