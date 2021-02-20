const TabelaDrones = require('./TabelaDrone');
const InvalidField = require('../../error/InvalidField');
const ValuesNotProvided = require('../../error/ValuesNotProvided');

class Drones {
    constructor({id, customer_image, customer_name, customer_address, battery, max_speed, average_speed, status, current_fly, createdAt, updatedAt}) {
        this.id = id;
        this.customer_image = customer_image;
        this.customer_name = customer_name;
        this.customer_address = customer_address;
        this.battery = battery;
        this.max_speed = max_speed;
        this.average_speed = average_speed;
        this.status = status;
        this.current_fly = current_fly;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async create(){
        this.validate();
        const result = await TabelaDrones.create({
            customer_image: this.customer_image,
            customer_name: this.customer_name,
            customer_address: this.customer_address,
            battery: this.battery,
            max_speed: this.max_speed,
            average_speed: this.average_speed,
            status: this.status,
            current_fly: this.current_fly
        })

        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.supdatedAt;
    }

    async detail(){
        const droneFound = await TabelaDrones.detail(this.id)
        this.customer_image = droneFound.customer_image;
        this.customer_name = droneFound.customer_name;
        this.customer_address = droneFound.customer_address;;
        this.battery = droneFound.battery;
        this.max_speed = droneFound.max_speed;
        this.average_speed = droneFound.max_speed;
        this.status = droneFound.status;
        this.current_fly = droneFound.current_fly;
        this.createdAt = droneFound.createdAt;
        this.updateAt = droneFound.updateAt;
    }

    async update(){
        await TabelaDrones.detail(this.id);
        const fields = [
            'customer_image',
            'customer_name',
            'customer_address',
            'battery',
            'max_speed',
            'average_speed',
            'status',
            'current_fly',
            'createdAt',
            'updatedAt'
        ]

        const updateValues = {};

        fields.forEach((field) => {
            const value = this[field];

            if(typeof value === 'string' && value.length > 0){
                updateValues[field] = value;
            }
        })

        if(Object.keys(updateValues).length === 0) throw new ValuesNotProvided()

        await TabelaDrones.update(this.id, updateValues);
    }

    async delete(){
        await TabelaDrones.detail(this.id);

        await TabelaDrones.delete(this.id);
    }

    validate(){
        const fields = [
            'customer_image',
            'customer_name',
            'customer_address',
            'battery',
            'max_speed',
            'average_speed',
            'status',
            'current_fly',
            'createdAt',
            'updatedAt'
        ]

        fields.forEach((field) => {
            const value = this[field];

            if(typeof value !== 'string' || value.length < 0) throw new InvalidField(field)
        })
    }
}

module.exports = Drones;