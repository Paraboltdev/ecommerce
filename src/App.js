
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
import PayPage from './Components/PayPage';
import MoviesHttpCall from './Components/MoviesHttpCall';





function App() {
  return (
    <div >
    <BrowserRouter>
      <Navbar/>
   <MoviesHttpCall/>
    <Routes>

    <Route path="/" element={<ShopPage />}/>
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="payment" element={<PayPage />} />
     
    
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
