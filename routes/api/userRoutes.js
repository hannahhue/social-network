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

//define friend functions

// /api/user
router.route("/").get(getUsers).post(postUser);

// /api/user/:courseId
router.route("/:userId").get(getUserInfo).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

//export
module.exports = router;
