import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
import Home from './home';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <PrivateRoute path='/*' component={Home}/>
        {/* <Route path='/*' element={<Home />}/> */}
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
