export default class PlacaMaeModel {
    constructor(objPlacaMae){
        this.id = objPlacaMae.id;
        this.nome = objPlacaMae.nome;
        this.frequencia_max_ram = objPlacaMae.frequencia_max_ram;
        this.socket = objPlacaMae.socket;
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
        return 'ddr'+this.ddr+', ram '+this.frequencia_max_ram+"GHz, "+this.socket+`, consumo ${this.consumo}w`
    }
    getList(){
        let m = new Map();
        m.set("nome",this.nome);
        m.set("ddr",this.ddr);
        m.set("frequencia_max_ram",this.frequencia_max);
        m.set("socket",this.socket);
        m.set("consumo",this.consumo);

        return m;
    }
}
