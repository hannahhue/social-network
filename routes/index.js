//define
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//check
router.use((req, res) => res.send("Wrong route!"));

//export
module.exports = router;
