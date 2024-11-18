import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
