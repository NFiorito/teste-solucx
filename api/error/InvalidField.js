class InvalidField extends Error{
    constructor(field) {
        const mensagem = `O campo ${field} está inválido.`;
        super(mensagem);
        this.name = 'InvalidField';
        this.idErro = 1
    }
}

module.exports = InvalidField;