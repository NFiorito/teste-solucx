const Sequelize = require('sequelize');
const config = require('config');

const connection =  new Sequelize({
    dialect: config.get('db.dialect'),
    storage: config.get('db.storage')
    });

module.exports = connection