const User = require("../models/User");
const { Op } = require("@sequelize/core");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.query.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

// searches with OR
const getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      limit: 10,
      where: {
        [Op.or]: req.body,
        // username: { [Op.like]: `${req.body.username}%` },
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: users } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, users, totalPages, currentPage };
};

const getPaginatedUsers = async (req, res) => {
  const { page, size, name } = req.query;
  var condition = name ? { name: { [Op.like]: `${name}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  User.findAndCountAll({ where: condition, limit })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.query.id);
    await user.destroy();
    res.status(200).json({ mes: "User is successfully deleted" });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.query.id);
    if (!user) {
      res.status(500).send({ mes: "User not found" });
    }

    await User.update(req.body, {
      where: { id: user.id },
    }).then((num) => {
      if (num == 1) {
        res.status(201).send({ mes: "User is successfully updated" });
      } else {
        res.send({
          message: `Cannot update user with id=${user.id}. Maybe user was not found or req.body is empty!`,
        });
      }
    });
  } catch (error) {
    res.status(500).json({ mes: error });
  }
};
// for url-path-params (/user/:id), use req.params.id . postmanda /user/1 kimi yaz
//  url-query-params (/user?id=123) use req.query.id(yada adi nedirse variablein)

module.exports = {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
  getUser,
  deleteUserById,
  getPaginatedUsers,
};
