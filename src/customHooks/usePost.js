import React from 'react';
import Api from '../api';
const api = new Api();
const escolheCall = async(nome,body) => {
    switch(nome){
        case "processador":
            return await api.adicionarProcessador(body);
            break;
        case "placa-mae":
            return await api.adicionarPlacaMae(body);
            break;
        case "armazenamento":
            return await api.adicionarArmazenamento(body);
            break;
        case "ram":
            return await api.adicionarMemoriaRam(body);
            break;
        case "vga":
            return await api.adicionarVga(body);
            break;
        case "fonte":
            return await api.adicionarFonte(body);
            break;
    }
}
const usePost = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (componente, body) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await escolheCall(componente,body);
      console.log(response)
      json = response;
      if (response.ok === false) throw new Error(json);
    } catch (err) {
      json = null;
      setError(err);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default usePost;
