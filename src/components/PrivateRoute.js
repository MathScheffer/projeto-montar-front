import React from 'react';
import { Route, Navigate  } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
return (
  localStorage.getItem('usuario') ?
  <Component /> :
  <Navigate  to='/login' />)
}





export default  PrivateRoute;