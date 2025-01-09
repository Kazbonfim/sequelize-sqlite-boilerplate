const User = require('../models/User');

module.exports = class UserController {
    // Inserção de usuário
    static async userCreate(req, res, next) {
        try {
            const { name, email } = req.body;  // Defina name e email do corpo da requisição
            if (!name || !email) {
                return res.status(400).json({ message: 'Name and email are required' });
            }

            const newUser = await User.create({
                name: name,
                email: email
            });
            console.log('User created:', newUser);
            res.status(200).json({ name: newUser.name, email: newUser.email });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Error creating user', error: error.message });
        }
    }

    // Exibir usuário
    static async userShow(req, res, next) {
        try {
            const { id, name, email } = req.params;  // Extrai os parâmetros da URL

            // Condições de busca
            const conditions = {};
            if (id) conditions.id = id;
            if (name) conditions.name = name;
            if (email) conditions.email = email;

            // Condições de busca ajustadas para retornar de acordo com os parâmetros :P
            const user = await User.findAll({ where: conditions });

            if (user.length === 0) {  // Verifica se algum usuário foi encontrado
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user);  // Retorna o(s) usuário(s) encontrado(s)
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ message: 'Error fetching user', error: error.message });
        }
    }

    // Busca de usuário por ID
    static async userFind(req, res, next) {
        try {
            const user = await User.findByPk(req.params.id); // Busca pelo id
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ message: 'Error fetching user', error: error.message });
        }
    }

    // Atualização de usuário
    static async userUpdate(req, res, next) {
        try {
            const { name, email } = req.body;  // Dados para atualização
            const user = await User.findByPk(req.params.id); // Busca pelo id
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.name = name || user.name;  // Atualiza o nome, se fornecido
            user.email = email || user.email;  // Atualiza o email, se fornecido
            await user.save();  // Salva as mudanças no banco
            res.status(200).json(user);
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ message: 'Error updating user', error: error.message });
        }
    }

    // Deleção de usuário
    static async userDelete(req, res, next) {
        try {
            const user = await User.findByPk(req.params.id);  // Busca pelo id
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            await user.destroy();  // Deleta o usuário
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ message: 'Error deleting user', error: error.message });
        }
    }
};