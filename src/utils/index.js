import { ArmazenamentoModel, FonteModel, MemoriaRamModel, PlacaMaeModel, PlacaVideoModel, ProcessadorModel } from "../model";

export const escolheInstancia = (categoria,produtoJson) => {
    //console.log(categoria)
    if(categoria === 'processador'){
        return new ProcessadorModel(produtoJson);
    }else if(categoria === 'placa-mae'){
        return new PlacaMaeModel(produtoJson)
    }else if(categoria === 'armazenamento'){
        return new ArmazenamentoModel(produtoJson);
    }else if(categoria === 'ram'){
        return new MemoriaRamModel(produtoJson);
    }else if(categoria === 'vga'){
        return new PlacaVideoModel(produtoJson)
    }else if(categoria === 'fonte'){
        return new FonteModel(produtoJson);
    }
}

export const mapToArray = (map) => {
    let arr = [];

    map.forEach((value,key) => {
        let temp = [key,value];
        arr.push(temp)
    })

    return arr;
}