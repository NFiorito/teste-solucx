const ModeloTabelaDrone = require('../routes/drones/ModeloTabelaDrone');

function createTables() {
    ModeloTabelaDrone
    .sync()
    .then(() => {
        console.log("Tabela criada com sucesso.")
    })
    .catch(err => {
        console.log(`Erro: ${err}`);
    })
}

module.exports = createTables