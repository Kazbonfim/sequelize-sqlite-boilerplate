const sequelize = require('../database/sqlite_database');

const syncDataBase = async () => {
    try {
        await sequelize.sync({
            //force: true // Apaga os dados sempre que o servidor for iniciado, use com cautela
        })
        console.log('Sqlite: Banco de dados sincronizado com sucesso');
    } catch (error) {
        console.log('Sqlite: Erro ao sincronizar banco de dados', error);
    } finally {
        // await sequelize.close(); // ??? Estava travando interações com o db local, então desativei, se for necessário, só descomentar. 
    }
};

module.exports = syncDataBase;