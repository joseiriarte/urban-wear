import { HashRouter, Routes, Route } from 'react-router-dom';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HighlightedProducts } from './components/HighlightedProducts';
import { ProductDetails } from './components/ProductDetails';
import { ProductQuality } from './components/ProductQuality';
import { ProductsList } from './components/ProductsList';
import { Error404 } from './components/Error404';
import { useState } from 'react';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const itemId = crypto.randomUUID();
    const newItem = { ...item, itemId: itemId };
    setCart([...cart, newItem]);
  };

  const handleRemoveFromCart = (id) => {
    const newCart = cart.filter((item) => item.itemId !== id);
    setCart(newCart);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center bg-slate-50 font-Poppins'>
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Banner />
                <HighlightedProducts />
                <ProductQuality />
                <Footer />
              </>
            }
          />
          <Route
            path='/productos'
            element={
              <>
                <Header />
                <ProductsList />
                <Footer />
              </>
            }
          />
          <Route
            path='/productos/:id'
            element={
              <>
                <Header />
                <ProductDetails handleAddToCart={handleAddToCart} />
                <Footer />
              </>
            }
          />
          <Route
            path='/carrito'
            element={
              <>
                <Header />
                <Cart
                  cart={cart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
                <Footer />
              </>
            }
          />
          <Route
            path='*'
            element={
              <>
                <Header />
                <Error404 />
                <Footer />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
