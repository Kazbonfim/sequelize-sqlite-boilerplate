const { UserMysql } = require('../models/User');

const syncMysqlDatabase = async () => {
    try {
        await UserMysql.sync({
            //force: true // Apaga os dados sempre que o servidor for iniciado, use com cautela
        })
        console.log('Mysql: Banco de dados sincronizado com sucesso');
    } catch (error) {
        console.log('Mysql: Erro ao sincronizar banco de dados', error);
    } finally {
        // await sequelize.close(); // ??? Estava travando interações com o db local, então desativei, se for necessário, só descomentar. 
    }
};

module.exports = syncMysqlDatabase;