/** @format */

import Icon from '@mdi/react';
import { mdilCart } from '@mdi/light-js';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <h1>Serena Grocery</h1>
            <h2>All your grocery needs, straight from farmers</h2>
        </div>
    );
};

const NavBar = () => {
    // TODO: implement actual routing to replace both anchors.
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
        </div>
    );
};

const CartButton = ({}) => {
    return (
        <NavLink to='/cart'>
            <Icon
                path={mdilCart}
                size={2}
            ></Icon>
        </NavLink>
    );
};

const ShopStickyBar = () => {
    return (
        <div className='sticky top-0'>
            <Banner></Banner>
            <NavBar></NavBar>
            <CartButton></CartButton>
        </div>
    );
};

export default ShopStickyBar;
