'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      accountID: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      transactionCategoryID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }, 
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
              args: [1, 100],
              msg: 'Transaction name must have between 1 and 100 characters'
          }
        }
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pending: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      activeFlag: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
   });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};