import React from 'react';
import Api from '../api';
const api = new Api();

const usePost = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (body) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await api.autenticacao(body);
      json = response;
      console.log(json)
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
