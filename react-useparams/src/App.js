import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';

function App() {
  return (
    <div>
      <header>
        <button onClick={()=>window.location.href="/product/men"}>Men</button>
        <button onClick={()=>window.location.href="/product/women"}>Women</button>
        <button onClick={()=>window.location.href="/product/kids"}>Kids</button>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:pradeepCategory' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
