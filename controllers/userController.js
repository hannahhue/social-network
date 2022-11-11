const { User, Thought } = require("../models");

//export all functions
module.exports = {
  //get all users
  async getUsers(req, res) {
    try {
      const usersData = await User.find().select("-__v");
      res.status(200).json(usersData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get single user by id
  //with thoughts and friends
  async getUserInfo(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //post user
  async postUser(req, res) {
    try {
      const postUserData = await User.create(req.body);
      res.status(200).json(postUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //put / update user by id
  async updateUser(req, res) {
    try {
      const updateUserData = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delte user by id
  //with thoughts
  async deleteUser(req, res) {
    try {
      const deleteUserData = await User.findOneAndDelete(
        { _id: req.body.userId },
        { $set: req.body },
        { new: true }
      );
      await Thought.deleteMany({ _id: { $in: deleteUserData.thoughts } });
      res.status(200).json(deleteUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //post new friend
  async addFriend(req, res) {
    try {
      const friendData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      res.status(200).json(friendData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delte frineds
  async deleteFriend(req, res) {
    try {
      const deleteFriendData = await User.findOneAndDelete(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.status(200).json(deleteFriendData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
