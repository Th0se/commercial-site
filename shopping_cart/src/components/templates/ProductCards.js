/** @format */

import Icon from '@mdi/react';
import { mdilDelete, mdilPlus } from '@mdi/light-js';
import { useParams } from 'react-router-dom';
import products from '../products';
import { useState } from 'react';

const ShopCard = ({ item }) => {
    // Product card used on the shopping page.
    return (
        <div className='place-content-center grid gap-1 bg-gray-500 pt-4 pb-3'>
            <img
                src={item.image}
                alt='product'
                className='h-40 w-52'
            ></img>
            <p>{item.title}</p>
            <strong>{item.price}</strong>
        </div>
    );
};

const CartCard = ({ item, decrease, remove }) => {
    // Product card used on the cart.
    return (
        <div className='place-content-center grid gap-1 bg-gray-500 pt-4 pb-3'>
            <img
                src={item.image}
                alt='product'
                className='h-40 w-52'
            ></img>
            <div>
                <p>{item.title}</p>
                <strong>
                    {item.price * item.quantity} Wang for {item.quantity} unit
                </strong>
            </div>
            <button
                onClick={() => {
                    remove(item);
                    decrease(item.price * item.quantity);
                }}
            >
                <Icon
                    path={mdilDelete}
                    size={2}
                ></Icon>
            </button>
        </div>
    );
};

const DetailCard = ({ cart, total }) => {
    // Product detail page.
    const { id } = useParams();
    const item = products.filter((thing) => `${thing.id}` === id);
    const [quantity, setQuantity] = useState(0);
    const handleDecideQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const handleDecreaseQuantity = () => {
        setQuantity(quantity - 1);
    };

    return (
        <div className='grid sm:place-items-center md:grid-cols-2'>
            <img
                src={item[0].image}
                alt='product'
                className='w-10/12 md:w-2/4 justify-center md:row-span-2'
            ></img>
            <div className='p-2'>
                <strong>{item[0].title}</strong>
                <strong>{item[0].price}</strong>
                <strong>{item[0].size}</strong>
                <p>{item[0].description}</p>
            </div>
            <div className='p-2'>
                <button onClick={handleDecreaseQuantity}>
                    ** Put 'minus' icon here**
                </button>
                <label htmlFor='quantity'>
                    Quantity
                    <input
                        type='number'
                        name='quantity'
                        id='quantity'
                        value={quantity}
                        onChange={handleDecideQuantity}
                    ></input>
                </label>
                <button onClick={handleIncreaseQuantity}>
                    **Put 'plus' icon here**
                </button>
            </div>
            <button
                onClick={() => {
                    cart({ ...item[0], quantity: quantity });
                    total(item[0].price * quantity);
                }}
                className='md:col-span-2'
            >
                <Icon
                    path={mdilPlus}
                    size={2}
                ></Icon>
            </button>
        </div>
    );
};

export { ShopCard, CartCard, DetailCard };
