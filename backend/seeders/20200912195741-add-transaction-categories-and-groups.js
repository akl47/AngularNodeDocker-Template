'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TransactionCategoryGroups', [{
        name: 'Uncategorized',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Investments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Expenses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Income',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

    const transactionCategoryGroupUncategorized = await queryInterface.sequelize.query(
      `SELECT id from "TransactionCategoryGroups" where name ='Uncategorized';`
    );
    const transactionCategoryGroupUtility = await queryInterface.sequelize.query(
      `SELECT id from "TransactionCategoryGroups" where name ='Utilities';`
    );
    const transactionCategoryGroupInvestments = await queryInterface.sequelize.query(
      `SELECT id from "TransactionCategoryGroups" where name ='Investments';`
    );
    const transactionCategoryGroupExpenses = await queryInterface.sequelize.query(
      `SELECT id from "TransactionCategoryGroups" where name ='Expenses';`
    );
    const transactionCategoryGroupIncome = await queryInterface.sequelize.query(
      `SELECT id from "TransactionCategoryGroups" where name ='Income';`
    );

    await queryInterface.bulkInsert('TransactionCategories', [{
      name: 'Uncategorized',
      transactionCategoryGroupID: transactionCategoryGroupUncategorized[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, ], {});

    await queryInterface.bulkInsert('TransactionCategories', [{
        name: 'Income',
        transactionCategoryGroupID: transactionCategoryGroupIncome[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chase Payment',
        transactionCategoryGroupID: transactionCategoryGroupIncome[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rent',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gas',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electric',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Water',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Internet',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Insurance',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Subscriptions',
        transactionCategoryGroupID: transactionCategoryGroupUtility[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Roth IRA',
        transactionCategoryGroupID: transactionCategoryGroupInvestments[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'IRA',
        transactionCategoryGroupID: transactionCategoryGroupInvestments[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stonks',
        transactionCategoryGroupID: transactionCategoryGroupInvestments[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Groceries',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Food',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Home',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tools',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hobbies',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Games',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gasoline',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Work',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        transactionCategoryGroupID: transactionCategoryGroupExpenses[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    const transactionCategoryRothIRA = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Roth IRA'`);
    const transactionCategoryStonks = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Stonks'`);
    const transactionCategoryIRA = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='IRA'`);
    const transactionCategoryChasePayment = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Chase Payment'`);
    const transactionCategoryHome = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Home'`);
    const transactionCategoryGroceries = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Groceries'`);
    const transactionCategoryGasoline = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Gasoline'`);
    const transactionCategoryIncome = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Income'`);
    const transactionCategoryHobbies = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Hobbies'`);
    const transactionCategoryInternet = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Internet'`);
    const transactionCategorySubscriptions = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Subscriptions'`);
    const transactionCategoryRent = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Rent'`);
    const transactionCategoryFood = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Food'`);
    const transactionCategoryGames = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Games'`);
    const transactionCategoryInsurance = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Insurance'`);
    const transactionCategoryElectric = await queryInterface.sequelize.query(`SELECT id FROM "TransactionCategories" WHERE name ='Electric'`);

    await queryInterface.bulkInsert('TransactionAutoCategories', [{
        searchString: 'VGI-500 IX ADM INVESTMENT 054088065957314%',
        transactionCategoryID: transactionCategoryRothIRA[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'VGI-TGTRET2050 INVESTMENT 069988061195701%',
        transactionCategoryID: transactionCategoryStonks[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Carta dd9624ab8 EDI PYMNTS%',
        transactionCategoryID: transactionCategoryStonks[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'VGI-TGTRET2050 INVESTMENT 069988065957288%',
        transactionCategoryID: transactionCategoryIRA[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'AUTOMATIC PAYMENT - THANK',
        transactionCategoryID: transactionCategoryChasePayment[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'WASH LAUNDRY WAVERIDER',
        transactionCategoryID: transactionCategoryHome[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%INSTACART%',
        transactionCategoryID: transactionCategoryGroceries[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Safeway%',
        transactionCategoryID: transactionCategoryGroceries[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '76 - %',
        transactionCategoryID: transactionCategoryGasoline[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Uber%',
        transactionCategoryID: transactionCategoryGasoline[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Lyft%',
        transactionCategoryID: transactionCategoryGasoline[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'FASTRAK CSC',
        transactionCategoryID: transactionCategoryGasoline[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%NEURALINK%',
        transactionCategoryID: transactionCategoryIncome[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'MISSION CLIFFS',
        transactionCategoryID: transactionCategoryHobbies[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'SPECTRUM',
        transactionCategoryID: transactionCategoryInternet[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'comcast',
        transactionCategoryID: transactionCategoryInternet[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'SPACE EXPLORATIO DIRECT DEP PPD ID: 9111111103',
        transactionCategoryID: transactionCategoryIncome[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Vons%',
        transactionCategoryID: transactionCategoryGroceries[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Sender One LAX',
        transactionCategoryID: transactionCategoryHobbies[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Costco Gas',
        transactionCategoryID: transactionCategoryGasoline[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Time Warner Cable',
        transactionCategoryID: transactionCategoryInternet[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Spotify',
        transactionCategoryID: transactionCategorySubscriptions[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Shell',
        transactionCategoryID: transactionCategoryGasoline[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Cindy Chang%',
        transactionCategoryID: transactionCategoryRent[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Nicholas Bi%',
        transactionCategoryID: transactionCategoryRent[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%CHASE CREDIT CRD AUTOPAY%',
        transactionCategoryID: transactionCategoryChasePayment[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Costco',
        transactionCategoryID: transactionCategoryGroceries[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'McDonald%',
        transactionCategoryID: transactionCategoryFood[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Burger King%',
        transactionCategoryID: transactionCategoryFood[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Chick-fil-A%',
        transactionCategoryID: transactionCategoryFood[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'AAA%',
        transactionCategoryID: transactionCategoryInsurance[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'PAYPAL INST XFER 1AND1 INC WEB ID: PAYPALSI77',
        transactionCategoryID: transactionCategoryInternet[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%PRIVATEINTE%',
        transactionCategoryID: transactionCategoryInternet[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Payment Thank You - Web',
        transactionCategoryID: transactionCategoryChasePayment[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'SO CALIF EDISON PAYMENTS PPD ID: 0088778600',
        transactionCategoryID: transactionCategoryElectric[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'REI #14 MANHATTAN BH',
        transactionCategoryID: transactionCategoryHobbies[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'Seapointe%',
        transactionCategoryID: transactionCategoryRent[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Patreon%',
        transactionCategoryID: transactionCategorySubscriptions[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%Steam Games%',
        transactionCategoryID: transactionCategoryGames[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: '%EPIC GAMES%',
        transactionCategoryID: transactionCategoryGames[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchString: 'PGANDE%',
        transactionCategoryID: transactionCategoryElectric[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TransactionCategories', null, {});
    await queryInterface.bulkDelete('TransactionCategoryGroups', null, {});
    await queryInterface.bulkDelete('TransactionAutoCategories', null, {});

  }
};
