
import './App.css';
import CartCard from './Components/CartCard';
import ItemCard from './Components/ItemCard';
import ShopPage from './Components/ShopPage';
import ShoppingCart from './Components/ShoppingCart';
import {
  BrowserRouter,

  Route,
 
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar';




function App() {
  return (
    <div >
    <BrowserRouter>
      <Navbar/>
    
    <Routes>

    <Route path="/" element={<ShopPage />}/>
      <Route path="cart" element={<ShoppingCart />} />
     
    
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
