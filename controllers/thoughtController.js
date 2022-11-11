const { User, Thought } = require("../models");

//export all functions
module.exports = {
  //get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughtsData = await Thought.find().select("-__v");
      res.status(200).json(thoughtsData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get single thught by id
  async getThoughtInfo(req, res) {
    try {
      const thoughtData = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      res.status(200).json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //post new thought
  async postThought(req, res) {
    try {
      const postThoughtData = await Thought.create(req.body);
      res.status(200).json(postThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //put///update thought
  async updateThought(req, res) {
    try {
      const updateThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );
      console.log("hiiiii");
      console.log(updateThoughtData);
      res.status(200).json(updateThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delte thought
  async deleteThought(req, res) {
    try {
      const deleteThoughtData = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      res.status(200).json(deleteThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
