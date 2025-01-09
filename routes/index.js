const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apicontroller');

// Padrão
router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Conectado com sucesso!' });
});

// Retorna usuários com base no id, name ou email
router.get('/users/:id?', ApiController.userShow); // Busca por ID
router.get('/users/name/:name?', ApiController.userShow); // Busca por Name
router.get('/users/email/:email?', ApiController.userShow); // Busca por Email

// Retorna um usuário específico a partir do ID
router.get('/users/id/:id', ApiController.userFind); // Busca por ID específico

// Adiciona um novo usuário, a partir do corpo da requisição
router.post('/users', ApiController.userCreate); // Criação de usuário

// Atualiza dados de usuário, a partir do corpo de uma requisição
router.put('/users/:id', ApiController.userUpdate); // Atualiza usuário

// Deleta um usuário a partir do corpo de uma requisição
router.delete('/users/:id', ApiController.userDelete); // Deleta usuário

module.exports = router;