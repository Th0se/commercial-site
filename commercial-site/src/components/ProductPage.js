/** @format */

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import soldItems from '../assets/data/soldItems';
import Header from './reusables/Header';
import Footer from './reusables/Footer';

const ProductPage = ({ theme, handleCart, handleTotalPrice, handleTheme }) => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(0);
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };

    /* Find the product in soldItems which matches the id specified by the URL.
    because filter returns an array, use the [0] index to find the exact product. */
    const product = soldItems.filter((item) => item.id === `${id}`)[0];
    return (
        <div
            data-theme={theme}
            className='text-text bg-primaryBackground'
        >
            <Header></Header>
            <main>
                <div className='grid bg-tertiaryBackground grid-cols-2'>
                    <div className='w-full flex justify-center items-center'>
                        <img
                            className='sm:w-48 sm:h-48 md:w-64 md:h-64'
                            src={product.image}
                            alt={product.name}
                        ></img>
                    </div>
                    <div className='grid grid-rows-5 p-2 items-center sm:w-10/12'>
                        <p className='text-2xl'>
                            <strong>{product.name}</strong>
                        </p>
                        <p>{product.description}</p>
                        <p>
                            <strong>
                                {product.pricePerKilo} Wang per kilo
                            </strong>
                        </p>
                        <form>
                            <label htmlFor='quantity'>
                                Enter desired quantity in kilos:
                            </label>
                            <input
                                className='text-primaryBackground sm:w-full sm:my-4 md:mx-4'
                                type='number'
                                id='quantity'
                                value={quantity}
                                onChange={handleQuantity}
                            ></input>
                        </form>
                        <button
                            onClick={() => {
                                handleCart.add({
                                    name: product.name,
                                    image: product.image,
                                    pricePerKilo: product.pricePerKilo,
                                    quantity: quantity,
                                    id: product.id,
                                });
                                handleTotalPrice.add(
                                    quantity * product.pricePerKilo
                                );
                                setQuantity(0);
                            }}
                            className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </main>
            <Footer
                theme={theme}
                handleTheme={handleTheme}
            ></Footer>
        </div>
    );
};

export default ProductPage;
