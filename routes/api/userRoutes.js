//define
const router = require("express").Router();

//define functions
const {
  getUsers,
  getUserInfo,
  postUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

// /api/user
router.route("/").get(getUsers).post(postUser, addFriend);

// /api/user/:courseId
router
  .route("/:userId")
  .get(getUserInfo)
  .put(updateUser)
  .delete(deleteUser, deleteFriend);

module.exports = router;
