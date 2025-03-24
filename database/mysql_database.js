const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'ORM', 'root', '1234', //Nome do DB, usuário, e senha.
    {
        host: 'localhost', //Host
        dialect: 'mysql',
        logging: false,
    }
);

// Garantir a existência do banco de dados indicado, antes da inicialização do servidor
const createMysqlDatabase = async () => {
    try {
        const connection = await new Sequelize('', 'root', '1234', {
            host: 'localhost',
            dialect: 'mysql',
        })

        await connection.query(`CREATE DATABASE IF NOT EXISTS orm;`);
        console.log('Criação de DB Mysql concluída! Agora todas as operações devem funcionar corretamente.');
    } catch (error) {
        console.error('Erro ao garantir a existência do banco de dados mySql: ', error);
    }
};

module.exports = { sequelize, createMysqlDatabase };