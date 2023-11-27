const Sequelize = require('sequelize');

const sequelize = new Sequelize('primer_final', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

  export default sequelize;