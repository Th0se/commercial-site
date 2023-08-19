/** @format */
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';

function App() {
    const [cart, setCart] = useState([]);
    const handleCart = (() => {
        const add = (item) => {
            const existIndex = cart.findIndex((i) => i.id === item.id);

            if (existIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[existIndex] = {
                    ...updatedCart[existIndex],
                    quantity:
                        Number(updatedCart[existIndex].quantity) +
                        Number(item.quantity),
                };
                setCart(updatedCart);
            } else {
                setCart([...cart, item]);
            }
        };

        const remove = (item) => {
            setCart(cart.filter((i) => i.id !== item.id));
        };
        const empty = () => {
            setCart([]);
        };
        return { add, remove, empty };
    })();
    const [totalPrice, setTotalPrice] = useState(0);
    const handleTotalPrice = (() => {
        const add = (price) => {
            setTotalPrice(totalPrice + price);
        };
        const reset = () => {
            setTotalPrice(0);
        };
        const reduce = (price) => {
            setTotalPrice(totalPrice - price);
        };
        return { add, reset, reduce };
    })();

    const [theme, setTheme] = useState('dark');
    const handleTheme = (() => {
        const light = () => {
            setTheme('light');
        };
        const dark = () => {
            setTheme('dark');
        };
        const pastelChaos = () => {
            setTheme('pastelChaos');
        };
        const amethystAurora = () => {
            setTheme('amethystAurora');
        };

        return { light, dark, pastelChaos, amethystAurora };
    })();
    return (
        <BrowserRouter basename='/commercial-site'>
            <Routes>
                <Route
                    path='/*'
                    element={
                        <About
                            theme={theme}
                            handleTheme={handleTheme}
                        ></About>
                    }
                ></Route>
                <Route
                    path='/shop'
                    element={
                        <Shop
                            theme={theme}
                            handleTheme={handleTheme}
                        ></Shop>
                    }
                ></Route>
                <Route
                    path='/cart'
                    element={
                        <Cart
                            theme={theme}
                            cart={cart}
                            totalPrice={totalPrice}
                            handleTotalPrice={handleTotalPrice}
                            handleCart={handleCart}
                            handleTheme={handleTheme}
                        ></Cart>
                    }
                ></Route>
                <Route
                    path='/shop/:id'
                    element={
                        <ProductPage
                            theme={theme}
                            handleCart={handleCart}
                            handleTotalPrice={handleTotalPrice}
                            handleTheme={handleTheme}
                        ></ProductPage>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
