'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'clients',
          key: 'cpf',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hourInit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hourEnd: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('schedules');
  }
};
