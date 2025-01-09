const sequelize = require('../database/database');
const User = require('../models/User');

const syncDataBase = async () => {
    try {
        await sequelize.sync({
            force: true // Apaga os dados sempre que o servidor for iniciado, use com cautela
        })
        console.log('Bando de dados sincronizado com sucesso');
    } catch (error) {
        console.log('Erro ao sincronizar banco de dados', error);
    } finally {
        // await sequelize.close(); // ??? Estava travando interações com o db local, então desativei, se for necessário, só descomentar. 
    }
};

module.exports = syncDataBase;