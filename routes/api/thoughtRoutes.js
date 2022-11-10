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

//define friend functions

// /api/Thought
router.route("/").get(getThoughts).post(postThought);

// /api/Thought/:courseId
router
  .route("/:thoughtId")
  .get(getThoughtInfo)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post().delete();

module.exports = router;
