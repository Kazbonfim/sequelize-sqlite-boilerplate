const { DataTypes } = require('sequelize');
const sequelizeSqlite = require('../database/sqlite_database');
const { sequelize: sequelizeMysql } = require('../database/mysql_database');

const user = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
};

const UserSqlite = sequelizeSqlite.define('User', user);
const UserMysql = sequelizeMysql.define('User', user);

module.exports = { UserSqlite, UserMysql };