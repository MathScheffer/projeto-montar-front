export default class FonteModel {
    constructor(objFonte){
        this.id = objFonte.id;
        this.nome = objFonte.nome;
        this.capacidade = objFonte.capacidade;

    }
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }

    getDescription(){
        return this.capacidade+'w'
    }
    getList(){
        let m = new Map();
        m.set("nome",this.nome);
        m.set("capacidade",this.capacidade);
        
        return m;
    }
}
