const express = require("express");
const { createSleep } = require("../controller/sleepController");

const router = express.Router();

router.route("/").post(createSleep);

module.exports = router;
