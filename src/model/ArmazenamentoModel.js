export default class PlacaMaeModel {
    constructor(objArmazenamento){
        this.id = objArmazenamento.id;
        this.nome = objArmazenamento.nome;
        this.tipo = objArmazenamento.tipo;
        this.capacidade = objArmazenamento.capacidade;
        this.consumo = objArmazenamento.consumo;
    }
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }

    getDescription(){
        return this.tipo+", "+this.capacidade+`GB, consumo ${this.consumo}w`
    }
    getList(){
        let m = new Map();
        m.set("nome",this.nome);
        m.set("tipo",this.tipo);
        m.set("capacidade",this.capacidade);
        m.set("consumo",this.consumo);

        return m;
    }
}
