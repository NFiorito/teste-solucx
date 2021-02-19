const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

//Importando rotas
const droneRouter = require('./routes/drones')

const app = express();

app.use(bodyParser.json());

app.use('/drones', droneRouter)

app.listen(config.get('api.port'), () => {
    console.log(`Servidor rodando na porta ${config.get('api.port')}`)
})