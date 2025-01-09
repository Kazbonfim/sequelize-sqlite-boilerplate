const sequelize = require('../database/database');
const User = require('../models/User');

const syncDataBase = async () => {
    try {
        await sequelize.sync({force: true})
        console.log('Bando de dados sincronizado com sucesso');
    } catch (error) {
        console.log('Erro ao sincronizar banco de dados', error);
    } finally {
        await sequelize.close();
    }
};

module.exports = syncDataBase;