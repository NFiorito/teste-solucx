const router = require('express').Router();
const TabelaDrone = require('./TabelaDrone');
const Drone = require('./Drone');
const { sort } = require('./TabelaDrone');

//Rota para listar dados
router.get('/drones', async (request, response) => {
    const page = request.query._page;
    const limit = request.query._limit;
    const sortBy = request.query._sort;
    const order = request.query._order;

    //Caso haja queries para paginação irá executar essa método
    if(page && limit){
        const results = await TabelaDrone.pagination(page, limit)
        response.status(200);
        response.send(JSON.stringify(results));
    }
    //Caso haja queries para ordenação irá executar essa método
    else if(sortBy && order){
        const results = await TabelaDrone.sort(sortBy, order)
        console.log('sort')
        response.status(200);
        response.send(JSON.stringify(results));
    }
    //E caso seja apenas para listar os itens executará esse método
    else{
        const results = await TabelaDrone.list();
        response.status(200);
        response.send(JSON.stringify(results));
    }
})
//Rota para detalhar um item do banco de dados
router.get('/drones/:id', async (request, response, next) => {
    try{
        const idDrone = request.params.id;
        const drone = new Drone({id: idDrone});
        await drone.detail();
        response.status(200);
        response.send(JSON.stringify(drone))
    }
    catch(error){
        next(error)
    }
})
//Rota para criar um novo item
router.post('/drones/', async (request, response, next) => {
    try{
        const drone = new Drone(request.body);
        await drone.create();
        response.status(201);
        response.send(JSON.stringify(drone))
    } catch(error){
        next(error)
    }
})
//Rota para alterar informação de algum item
router.put('/drones/:id', async (request, response, next) => {
    try{
        const idDrone = request.params.id;
        const recivedValues = request.body;
        const data = Object.assign({}, recivedValues, {id: idDrone});
        const drone = new Drone(data);
        await drone.update();
        response.status(204);
        response.end();
    }
    catch(error){
        next(error)
    }
})
//Rota para deletar algum item
router.delete('/drones/:id', async (request, response, next) => {
    try{
        const idDrone = request.params.id;
        const drone = new Drone({id:idDrone})
        await drone.delete();
        response.status(204);
        response.end();
    }catch(error){
        next(error)
    }
})

module.exports = router;