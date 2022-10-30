import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <div className="App">

      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
