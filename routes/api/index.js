//define
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

router.use("/users", userRoutes);
router.use("/thought", thoughtRoutes);

//export
module.exports = router;
