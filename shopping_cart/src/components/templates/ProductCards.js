/** @format */

import Icon from '@mdi/react';
import { mdilDelete, mdilPlus } from '@mdi/light-js';

const ShopCard = ({ item }) => {
    // Product card used on the shopping page.
    return (
        <div>
            <img
                src={item.image}
                alt='product'
            ></img>
            <strong>{item.title}</strong>
            <strong>{item.price}</strong>
        </div>
    );
};

const CartCard = ({ item, onClick }) => {
    // Product card used on the cart.
    return (
        <div>
            <img
                src={item.image}
                alt='product'
            ></img>
            <div>
                <strong>{item.title}</strong>
                <strong>{item.price}</strong>
            </div>
            <button onClick={onClick}>
                <Icon
                    path={mdilDelete}
                    size={2}
                ></Icon>
            </button>
        </div>
    );
};

const DetailCard = (item, onClick) => {
    // Product detail page.
    return (
        <div>
            <img
                src={item.image}
                alt='product'
            ></img>
            <div>
                <strong>{item.title}</strong>
                <strong>{item.price}</strong>
                <strong>{item.size}</strong>
                <p>{item.description}</p>
            </div>
            <button onClick={onClick}>
                <Icon
                    path={mdilPlus}
                    size={2}
                ></Icon>
            </button>
        </div>
    );
};

export { ShopCard, CartCard, DetailCard };
