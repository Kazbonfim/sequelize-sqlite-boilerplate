const express = require('express');
const router = express.Router();

// Padrão
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'Conectado com sucesso!'});
});

// Retorna todos os usuários
router.get('/users', function(req, res, next) {

})

// Retorna um usuário específico a partir do ID
router.get('/users/:id', function(req, res, next) {

})

// Adiciona um novo usuário, a partir do corpo de uma req.
router.post('/users/:id', function(req, res, next) {

})

// Atualiza dados de usuário, a partir do corpo de uma req.
router.put('/users/:id', function (req, res, next) {

})

// Deleta um usuário a partir do corpo de uma req.
router.delete('/users/:id', function (req, res, next) {

})


module.exports = router;