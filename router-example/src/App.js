import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
  const [authenticate,setauthenticate]=useState(false);

  const PrivateRoute = () =>{
    return authenticate == true?<UserPage/>:<Navigate to="/login"/>
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<ProductDetailPage/>}/> 
        {/*Restful Route -  /products라는 url하나로 여러가지의 액션을 할 수 있게된다.*/}
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='user' element={<PrivateRoute/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
