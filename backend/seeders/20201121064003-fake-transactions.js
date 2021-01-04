'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transactionCategoryUncategorized = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Uncategorized';`);
    const transactionCategoryIncome = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Income';`);
    const transactionCategoryChasePayment = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Chase Payment';`);
    const transactionCategoryRent = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Rent';`);
    const transactionCategoryGas = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Gas';`);
    const transactionCategoryElectric = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Electric';`);
    const transactionCategoryWater = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Water';`);
    const transactionCategoryInternet = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Internet';`);
    const transactionCategoryInsurance = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Insurance';`);
    const transactionCategorySubscriptions = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Subscriptions';`);
    const transactionCategoryRothIRA = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Roth IRA';`);
    const transactionCategoryIRA = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='IRA';`);
    const transactionCategoryStonks = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Stonks';`);
    const transactionCategoryGroceries = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Groceries';`);
    const transactionCategoryFood = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Food';`);
    const transactionCategoryHome = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Home';`);
    const transactionCategoryTools = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Tools';`);
    const transactionCategoryHobbies = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Hobbies';`);
    const transactionCategoryGames = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Games';`);
    const transactionCategoryGasoline = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Gasoline';`);
    const transactionCategoryWork = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Work';`);
    const transactionCategoryOther = await queryInterface.sequelize.query(`SELECT id from "TransactionCategories" where name ='Other';`);

    console.log("Uncategorized:",transactionCategoryUncategorized[0][0].id)
    console.log("Income:",transactionCategoryIncome[0][0].id)
    console.log("ChasePayment:",transactionCategoryChasePayment[0][0].id)
    console.log("Rent:",transactionCategoryRent[0][0].id)
    console.log("Gas:",transactionCategoryGas[0][0].id)
    console.log("Electric:",transactionCategoryElectric[0][0].id)
    console.log("Water:",transactionCategoryWater[0][0].id)
    console.log("Internet:",transactionCategoryInternet[0][0].id)
    console.log("Insurance:",transactionCategoryInsurance[0][0].id)
    console.log("Subscriptions:",transactionCategorySubscriptions[0][0].id)
    console.log("RothIRA:",transactionCategoryRothIRA[0][0].id)
    console.log("IRA:",transactionCategoryIRA[0][0].id)
    console.log("Stonks:",transactionCategoryStonks[0][0].id)
    console.log("Groceries:",transactionCategoryGroceries[0][0].id)
    console.log("Food:",transactionCategoryFood[0][0].id)
    console.log("Home:",transactionCategoryHome[0][0].id)
    console.log("Tools:",transactionCategoryTools[0][0].id)
    console.log("Hobbies:",transactionCategoryHobbies[0][0].id)
    console.log("Games:",transactionCategoryGames[0][0].id)
    console.log("Gasoline:",transactionCategoryGasoline[0][0].id)
    console.log("Work:",transactionCategoryWork[0][0].id)
    console.log("Other:",transactionCategoryOther[0][0].id)

    
    queryInterface.bulkInsert('Transactions', [{
        transactionID: "abc123",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryGroceries[0][0].id,
        amount: 18.21,
        date: '01/01/2020',
        name: 'Seed1',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc124",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryRent[0][0].id,
        amount: 69.69,
        date: '02/02/2020',
        name: 'Seed2',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc125",
        accountID: "abc123",
        transactionCategoryID: transactionCategorySubscriptions[0][0].id,
        amount: 62.18,
        date: '03/03/2020',
        name: 'Seed3',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc126",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryUncategorized[0][0].id,
        amount: 60.05,
        date: '04/04/2020',
        name: 'Seed4',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc127",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryChasePayment[0][0].id,
        amount: 81.75,
        date: '05/05/2020',
        name: 'Seed5',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc128",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryUncategorized[0][0].id,
        amount: 21.1,
        date: '06/06/2020',
        name: 'Seed6',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc129",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryIncome[0][0].id,
        amount: 32.53,
        date: '07/07/2020',
        name: 'Seed7',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc130",
        accountID: "abc123",
        transactionCategoryID: transactionCategorySubscriptions[0][0].id,
        amount: 10.4,
        date: '08/08/2020',
        name: 'Seed8',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc131",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryInternet[0][0].id,
        amount: 7.48,
        date: '09/09/2020',
        name: 'Seed9',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc132",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryUncategorized[0][0].id,
        amount: 18.84,
        date: '10/10/2020',
        name: 'Seed10',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc133",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryChasePayment[0][0].id,
        amount: 60.78,
        date: '11/11/2020',
        name: 'Seed11',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc134",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryStonks[0][0].id,
        amount: 51.22,
        date: '12/12/2020',
        name: 'Seed12',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc135",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryWater[0][0].id,
        amount: 90.12,
        date: '05/03/2020',
        name: 'Seed13',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc136",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryElectric[0][0].id,
        amount: 20.19,
        date: '04/02/2020',
        name: 'Seed14',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc137",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryUncategorized[0][0].id,
        amount: 42.4,
        date: '09/05/2020',
        name: 'Seed15',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc138",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryGroceries[0][0].id,
        amount: 0.4,
        date: '01/02/2020',
        name: 'Seed16',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc139",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryElectric[0][0].id,
        amount: 58.65,
        date: '11/16/2020',
        name: 'Seed17',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc140",
        accountID: "abc123",
        transactionCategoryID: transactionCategorySubscriptions[0][0].id,
        amount: 53.98,
        date: '08/04/2020',
        name: 'Seed18',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc141",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryRent[0][0].id,
        amount: 32.04,
        date: '04/08/2020',
        name: 'Seed19',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transactionID: "abc142",
        accountID: "abc123",
        transactionCategoryID: transactionCategoryRothIRA[0][0].id,
        amount: 82.47,
        date: '03/02/2020',
        name: 'Seed20',
        notes: 'This is a test',
        pending: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    return
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
