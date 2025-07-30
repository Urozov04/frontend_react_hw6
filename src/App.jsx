import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import User from './pages/user/User';
import NotFound from './pages/not-found/NotFound';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';
import HomeDetail from './pages/home/HomeDetail';
import ProductDetail from './pages/home/HomeDetail';
import FoodDetail from './pages/food/FoodDetail';
import UserDetail from './pages/user/UserDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/food" element={<Food />} />
          <Route path='/recipes/:id' element={<FoodDetail/>}/>
          <Route path="/user" element={<User />} />
          <Route path='/users/:id' element={<UserDetail/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App