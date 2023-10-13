'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 10], // Minimum 1 character and maximum 10 characters
        },
        unique: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: Sequelize.DataTypes.ENUM(['male','female']),
        allowNull: true,
      },  
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    })
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
