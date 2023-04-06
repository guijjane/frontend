import logo from './logo.svg';
import './App.css';
import Products from './Code';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Nav';


function App() {
 
  return (
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>
</BrowserRouter>
  );
}

export default App;
           





                 
