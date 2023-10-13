const express = require("express");
const createUser = require("../controller/userController");

const app = express();
const router = express.Router();

router.route("/").post(createUser);

module.exports = router;
