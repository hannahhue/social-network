//define
const router = require("express").Router();

//define functions
const {
  getThoughts,
  getThoughtInfo,
  postThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

//define reaction functions
const {
  postReaction,
  deleteReaction,
} = require("../../controllers/reactionController.js");

// /api/Thought
router.route("/").get(getThoughts).post(postThought);

// /api/Thought/:courseId
router
  .route("/:thoughtId")
  .get(getThoughtInfo)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
