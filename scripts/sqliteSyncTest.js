// scripts/testDatabase.js
const sequelize = require('../database/sqlite_database');
const { UserSqliteSqlite } = require('../models/User'); // Importa o modelo

const testDatabase = async (name, email) => {
    try {
        // Inserção de um usuário
        const newUserSqlite = await UserSqlite.create({ name: name, email: email });
        console.log('Sqlite: Usuário criado:', newUserSqlite.toJSON());

        // Consulta de todos os usuários
        const UserSqlites = await UserSqlite.findAll();
        console.log('Sqlite: Lista de usuários:', UserSqlites.map(UserSqlite => UserSqlite.toJSON()));
    } catch (error) {
        console.error('Sqlite: Erro ao acessar o banco de dados:', error);
    } finally {
        await sequelize.close(); // Fecha a conexão
    }
};

module.exports = testDatabase;