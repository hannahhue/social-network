const { User, Thought } = require("../models");

//export all functions
module.exports = {
  //get all users
  async getUsers(req, res) {},
  //get single user by id
  //with thoughts and friends
  async getUserInfo(req, res) {},
  //post user
  async postUser(req, res) {},
  //put / update user by id
  async updateUser(req, res) {},
  //delte user by id
  //with thoughts
  async deleteUser(req, res) {},
  //post new friend
  async addFriend(req, res) {},
  //delte frineds
  async deleteFriend(req, res) {},
};
