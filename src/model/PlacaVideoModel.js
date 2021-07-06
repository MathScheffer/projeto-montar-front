export default class PlacaVideoModel {
    constructor(objPlacaVideo){
        this.id = objPlacaVideo.id;
        this.nome = objPlacaVideo.nome;
        this.capacidade = objPlacaVideo.capacidade;
        this.tdp = objPlacaVideo.tdp;
        this.consumo_max = objPlacaVideo.consumo_max;
    }
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }

    getDescription(){
        return this.capacidade+"GHz, tdp: "+this.tdp+`w(max ${this.consumo_max}w)`
    }
    getList(){
        let m = new Map();
        m.set("nome",this.nome);
        m.set("capacidade",this.frequencia_max);
        m.set("tdp",this.tdp);
        m.set("consumo_max",this.consumo_max);

        return m;
    }
}
