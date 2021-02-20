class ValuesNotProvided extends Error{
    constructor(){
        super('Não foram fornecidos dados para atualizar');
        this.name = 'ValuesNotProvided';
        this.id = 2;
    }
}

module.exports = ValuesNotProvided