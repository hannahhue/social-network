const { Thought } = require("../models");

//export all functions
module.exports = {
  //post reaction
  async postReaction(req, res) {
    try {
      const reactionData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      res.status(200).json(reactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delte reaction by id
  async deleteReaction(req, res) {
    try {
      const deleteReactionData = await Thought.findOneAndRemove(
        { _id: req.params.thoughtId },
        { $pull: { reactions: req.params.reactionId } },
        { new: true }
      );
      res.status(200).json(deleteReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
