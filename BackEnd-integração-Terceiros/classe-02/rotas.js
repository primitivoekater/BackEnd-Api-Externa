const express = require('express');
const { registroVoto, consultarVotos } = require('./controladores/votacao');

const rotas = express();

roteador.post('/votacao/:pais/:ip', registroVoto);
roteador.get('/votacao', consultarVotos)

module.exports = rotas;