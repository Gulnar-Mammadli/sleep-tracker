'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sleep_entries',{
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      sleep_time: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false,
      },
      wakeup_time: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false,
      },
      duration: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      quality_rating: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      note: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },  
      user_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: 'CASCADE',  // if parent is deleted, all child data is deleted 
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sleep_entries');
  }
};
