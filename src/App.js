import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <>
      
      <CartProvider>
        <Header />
        <Home />
      </CartProvider>
    </>
  );
}

export default App;
