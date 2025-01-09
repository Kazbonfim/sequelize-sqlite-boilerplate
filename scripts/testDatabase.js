// scripts/testDatabase.js
const sequelize = require('../database/database');
const User = require('../models/User'); // Importa o modelo

const testDatabase = async (name, email) => {
    try {
        // Inserção de um usuário
        const newUser = await User.create({ name: name, email: email });
        console.log('Usuário criado:', newUser.toJSON());

        // Consulta de todos os usuários
        const users = await User.findAll();
        console.log('Lista de usuários:', users.map(user => user.toJSON()));
    } catch (error) {
        console.error('Erro ao acessar o banco de dados:', error);
    } finally {
        await sequelize.close(); // Fecha a conexão
    }
};

module.exports = testDatabase;