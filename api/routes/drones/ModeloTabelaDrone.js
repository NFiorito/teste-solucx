const Sequelize = require('sequelize');
const connection = require('../../database/connection');

const columns = {
    customer_image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    customer_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    customer_address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    battery: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    max_speed: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    average_speed: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('success', 'pending', 'failed'),
        allowNull: false
    },
    current_fly: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = connection.define('drones', columns, {timestamp: false})