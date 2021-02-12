const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const ListaTarefasEntity = sequelize.define('todolist', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ListaTarefasEntity;