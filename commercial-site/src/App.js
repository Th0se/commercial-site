/** @format */
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    const handleCart = (() => {
        const add = (item) => {
            setCart([...cart, item]);
        };
        const remove = (item) => {
            setCart(cart.filter((i) => i.id !== item.id));
        };
        const empty = () => {
            setCart([]);
        };
        return { add, remove, empty };
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
}
export default App;
