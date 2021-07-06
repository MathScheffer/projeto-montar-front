import axios from 'axios';
const url = 'http://localhost:3000/api/';

const _get = url => new Promise( (resolve, reject) => axios.get(url).then( res => resolve( res.data ) ) );
const _post = ( url, dados ) => new Promise( ( resolve, reject ) => axios.post( url, dados ).then( response => resolve( response.data ) ) );

export default class MirrorApi{
    listarHardwarePorCategoria(categoria){
    return _get(url+categoria);
  }

  get detalhes() {
    return _get(`${ url }detalhes` );
  }
  
  async buscarEpisodio( id ) {
    const response = await _get(`${url}episodios?id=${id}`);
    return response[ 0 ];
  }
  
  async buscarDetalhes( id ) {
    const response = await _get(`${url}episodios/${id}/detalhes`);
    return response[ 0 ];
  }

  buscarNota( id ) {
    return _get(`${url}notas?episodioId=${id}`)
  }

  buscarTodasNotas() {
    return _get( `${url}notas` );
  }
  async registrarNota( {nota, episodioId } ) {
    const response = await _post( `${ url }notas`,{nota, episodioId});
    return response[ 0 ];
  }

  filtrarPorTermo( termo ) {
      return _get( `${ url }detalhes?q=${ termo }` )
    }
}
