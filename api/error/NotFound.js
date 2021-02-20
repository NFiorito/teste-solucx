class NotFound extends Error {
    constructor(){
        super('Drone não foi encontrado')
        this.name = 'NotFound';
        this.idErro = 0;
    }
}

module.exports = NotFound;