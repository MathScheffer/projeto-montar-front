export default class PlacaMaeModel {
    constructor(objPlacaMae){
        this.id = objPlacaMae.id;
        this.nome = objPlacaMae.nome;
        this.frequencia = objPlacaMae.frequencia;
        this.capacidade = objPlacaMae.capacidade;
        this.consumo = objPlacaMae.consumo;
        this.ddr = objPlacaMae.ddr
    }
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }

    getDescription(){
        return 'ddr'+this.ddr+', ram '+this.frequencia+"GHz, "+this.capacidade+`, consumo ${this.consumo}w`
    }
    getList(){
        let m = new Map();
        m.set("nome",this.nome);
        m.set("ddr",this.ddr);
        m.set("frequencia",this.frequencia_max);
        m.set("capacidade",this.capacidade);
        m.set("consumo",this.consumo);

        return m;
    }
}
