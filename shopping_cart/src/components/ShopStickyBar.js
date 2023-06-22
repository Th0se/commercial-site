/** @format */

import Icon from '@mdi/react';
import { mdilCart } from '@mdi/light-js';
import { NavLink } from 'react-router-dom';
import './ShopStickyBar.css';

const Banner = () => {
    return (
        <div className='place-content-center grid'>
            <h1 className='text-center'>Serena Grocery</h1>
            <h2 className='text-center'>
                All your grocery needs, straight from farmers
            </h2>
        </div>
    );
};

const NavBar = () => {
    // TODO: implement actual routing to replace both anchors.
    return (
        <div className='grid grid-cols-2 w-100 justify-self-end'>
            <div className='flex items-center justify-end'>
                <NavLink
                    className='inline-block border-solid border-2 border-black mx-1 text-center p-1'
                    to='/'
                >
                    Home
                </NavLink>
            </div>
            <div className='flex items-center justify-start'>
                <NavLink
                    className='inline-block border-solid border-2 border-black mx-1 text-center p-1'
                    to='/shop'
                >
                    Shop
                </NavLink>
            </div>
        </div>
    );
};

const CartButton = () => {
    return (
        <NavLink
            to='/cart'
            className={'grid'}
        >
            <Icon
                className='justify-self-center'
                path={mdilCart}
                size={2}
            ></Icon>
        </NavLink>
    );
};

const ShopStickyBar = () => {
    return (
        <div className='sticky top-0 bg-emerald-600 border-black border-b-2'>
            <Banner></Banner>
            <NavBar></NavBar>
            <CartButton></CartButton>
        </div>
    );
};

export default ShopStickyBar;
