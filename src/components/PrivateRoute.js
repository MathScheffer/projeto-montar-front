import React from 'react';
import { Route, Navigate  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('usuario_token');
  return (
    localStorage.getItem('usuario_token') ?
    <Component /> :
    <Navigate  to='/login' />
  )
}





export default  PrivateRoute;