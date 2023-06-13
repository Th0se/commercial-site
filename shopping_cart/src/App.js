/** @format */

import ShopStickyBar from './components/ShopStickyBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShoppingPage from './components/ShoppingPage';
import products from './components/products';
import Cart from './components/Cart';

function App() {
    return (
        <div>
            <ShopStickyBar></ShopStickyBar>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<HomePage />}
                ></Route>
                <Route
                    path='/shop'
                    element={<ShoppingPage object={products}></ShoppingPage>}
                ></Route>
                <Route
                    path='/cart'
                    element={<Cart array={products}></Cart>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
