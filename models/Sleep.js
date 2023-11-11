const { connect } = require("../db");
const db = connect();

const Sleep = db.define(
  "Sleep",
  {
    id: {
      type: db.Sequelize.DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    date: {
      type: db.Sequelize.DataTypes.DATE,
      allowNull: false,
    },
    sleep_time: {
      type: db.Sequelize.DataTypes.TIME,
      allowNull: false,
    },
    wakeup_time: {
      type: db.Sequelize.DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: db.Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    quality_rating: {
      type: db.Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    note: {
      type: db.Sequelize.DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: db.Sequelize.DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
      onDelete: "CASCADE", // if parent is deleted, all child data is deleted
    },
  },
  {
    tableName: "sleep_entries",
    timestamps: false,
  }
);

module.exports = Sleep;
