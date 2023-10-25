// thought-controller.js
const { Thought, User } = require('../models/thoughts');

const thoughtController = {
  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        // Add the thought to the user's thoughts array
        return User.findByIdAndUpdate(
          req.body.userId,
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  },
  // Update a thought by ID
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a thought by ID
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.id)
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        // Remove the thought from the user's thoughts array
        return User.findByIdAndUpdate(
          thought.userId,
          { $pull: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then(() => res.json({ message: 'Thought deleted' }))
      .catch((err) => res.status(400).json(err));
  },
  // Add a reaction to a thought
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thoughtController;
