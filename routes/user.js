const express = require("express");
const {
  createUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUserById,
  getUserById,
  getPaginatedUsers,
} = require("../controller/userController");

const router = express.Router();

router.route("/").post(createUser).get(getAllUsers);
router.route("/").put(updateUser);
router.route("/id").get(getUserById);
router.route("/paginated").get(getUser);
router.route("/pagination").get(getPaginatedUsers);
router.route("/delete").delete(deleteUserById);

module.exports = router;
