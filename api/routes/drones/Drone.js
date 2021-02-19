const TabelaDrones = require('./TabelaDrone');

class Drones {
    constructor({id, customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly}) {
        this.id = id;
        this.customer_image = customer_image;
        this.customer_name = customer_name;
        this.customer_address = customer_address;
        this.battery = battery;
        this.max_speed = max_speed;
        this.average_speed = average_speed;
        this.status = status;
        this.current_fly = current_fly;
    }

    async create(){

    }

    async detail(){

    }

    async update(){

    }

    async delete(){

    }

    validate(){

    }
}

module.exports = Drones;