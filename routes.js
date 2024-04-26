// routes.js
const express = require('express');
const router = express.Router();
const controller = require('./Controller/controller');

// Rota raiz para exibir uma mensagem de boas-vindas
router.get('/', (req, res) => {
    res.send('Bem-vindo à API do Currículo!');
});

// Rota para manipular as requisições relacionadas ao currículo
router.get('/curriculo', controller.getCurriculo);
router.post('/criarCurriculo', controller.createCurriculo);

module.exports = router;
