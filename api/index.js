const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

//Criando tabelas que serão usadas
const createTable = require('./database/createTables');

//Importando rotas
const droneRouter = require('./routes/drones')

//Importando erros
const NotFound = require('./error/NotFound')
const InvalidField = require('./error/InvalidField')
const ValuesNotProvided = require('./error/ValuesNotProvided')

//Criando instancia do express
const app = express();

app.use(bodyParser.json());

//Definindo rotas
app.use('/', droneRouter)

//Tramento de erro
app.use((error, request, response, next) => {
    let statusCode = 500;

    if(error instanceof NotFound) statusCode = 404;
    else if(error instanceof InvalidField || error instanceof ValuesNotProvided) statusCode = 400;

    response.status(statusCode);
    response.send(JSON.stringify({
        mensagem: error.message,
        id: error.id
    }))
})

//Definindo a porta que a API irá utilizar
app.listen(config.get('api.port'), () => {
    createTable();
    console.log(`Servidor rodando na porta ${config.get('api.port')}`)
})