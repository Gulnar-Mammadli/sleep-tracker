const { connect } = require("../db");
const db = connect();

const User = db.define(
  "User",
  {
    id: {
      type: db.Sequelize.DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 10], // Minimum 1 character and maximum 10 characters
      },
      unique: true,
    },
    email: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: db.Sequelize.DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: db.Sequelize.DataTypes.ENUM(["male", "female"]),
      allowNull: true,
    },
    name: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: db.Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
