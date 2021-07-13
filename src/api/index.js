import axios from 'axios';
const url = 'http://localhost:3000/api/';

const _get = url => new Promise( (resolve, reject) => axios.get(url).then( res => resolve( res.data ) ) );
const _post = ( url, dados ) => new Promise( ( resolve, reject ) => axios.post( url, dados ).then( response => resolve( response.data ) ) );

export default class MirrorApi{
  listarHardwarePorCategoria(categoria){
    return _get(url+categoria);
  }

  adicionarProcessador(body){
    return _post(url+"computador/adicionar/processador",body)
  }
  adicionarPlacaMae(body){
    return _post(url+"computador/adicionar/placa-mae",body)
  }
  adicionarMemoriaRam(body){
    return _post(url+"computador/adicionar/ram",body)
  }
  adicionarArmazenamento(body){
    return _post(url+"computador/adicionar/armazenamento",body)
  }
  adicionarVga(body){
    return _post(url+"computador/adicionar/vga",body)
  }
  adicionarFonte(body){
    return _post(url+"computador/adicionar/fonte",body)
  }
  adicionarComputador(body){
    return _post(url+"computador/adicionar/computador",body)
  }
  autenticacao(body){
    return _post(url+"authentication",body);
  }
}
