const NotFound = require('../../error/NotFound');
const Modelo = require('./ModeloTabelaDrone');

module.exports = {
    list(){
        return Modelo.findAll();
    },
    async detail(id){   
        const droneFound = await Modelo.findOne({where: {id: id}})
        if(!droneFound) throw new NotFound();

        return droneFound;
    },
    create(drone){
        return Modelo.create(drone);
    },
    async update(id, updateValues){
        return Modelo.update(
            updateValues,
            {
                where: {id: id}
            }
        )
    },
    async delete(id){
        return Modelo.destroy({
            where: {id: id}
        })
    },
    pagination(auxpage, auxlimit){
        const page = (auxpage - 1) * auxlimit
        return Modelo.findAll(
            {
                limit: auxlimit,
                offset: page
            })
        
    },
    sort(sortBy, order){
        return Modelo.findAll({
            order: [
                [sortBy, order]
            ]
        })
    }
}