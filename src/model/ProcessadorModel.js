export default class ProcessadorModel {
    constructor(objProcessador){
        this.id = objProcessador.id;
        this.nome = objProcessador.nome;
        this.marca = objProcessador.marca;
        this.frequencia = objProcessador.frequencia;
        this.frequencia_max = objProcessador.frequencia_max;
        this.socket = objProcessador.socket;
        this.tdp = objProcessador.tdp;
        this.consumo_max = objProcessador.consumo_max
    }
    getId(){
        return this.id;
    }
    getNome(){
        return this.nome;
    }

    getDescription(){
        return this.marca+", "+this.frequencia+`(up to ${this.frequencia_max})`+", "+this.socket+`, tdp ${this.tdp}w(to ${this.consumo_max}w)`
    }
    getList(){
        let m = new Map();
        m.set("nome",this.nome);
        m.set("marca",this.marca);
        m.set("frequencia",this.frequencia);
        m.set("frequencia_max",this.frequencia_max);
        m.set("socket",this.socket);
        m.set("tdp",this.tdp);
        m.set("consumo_max",this.consumo_max);

        return m;
    }
}
