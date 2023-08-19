/** @format */

import soldItems from '../assets/data/soldItems';
import Footer from './reusables/Footer';
import Header from './reusables/Header';
import { Link } from 'react-router-dom';

const Shop = ({ theme, handleTheme }) => {
    return (
        <div
            data-theme={theme}
            className='text-text bg-primaryBackground'
        >
            <Header></Header>
            <main>
                <div className='grid p-3 bg-secondaryBackground items-center gap-3 sm:grid-cols-2 md:grid-cols-4 md:justify-items-center lg:grid-cols-6'>
                    {soldItems.map((item) => (
                        <Link
                            aria-label={`Visit ${item.name}'s information page.`}
                            to={`/shop/${item.id}`}
                        >
                            <div className='grid bg-tertiaryBackground sm:grid-cols-2'>
                                <img
                                    src={item.image}
                                    alt={`Product preview showing a handful of ${item.name}`}
                                    className='w-40 col-start-1'
                                ></img>
                                <div className='grid text-center'>
                                    <h2>{item.name}</h2>
                                    <p>
                                        <strong>
                                            {item.pricePerKilo} Wang
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer
                theme={theme}
                handleTheme={handleTheme}
            ></Footer>
        </div>
    );
};

export default Shop;
