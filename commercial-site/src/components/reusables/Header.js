/** @format */

import { NavLink } from 'react-router-dom';

/* These two variables are to style active and inactive pages. */
const active =
    'text-xl font-bold underline decoration-cop decoration-4 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground';
const inactive =
    'text-xl font-bold focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground';

const About = () => {
    return (
        <div>
            <NavLink
                to='/about'
                aria-label={({ isActive }) =>
                    isActive
                        ? 'Open "about" page. You are here.'
                        : 'Open "about" page'
                }
                className={({ isActive }) => (isActive ? active : inactive)}
            >
                About
            </NavLink>
        </div>
    );
};

const Shop = () => {
    return (
        <div>
            <NavLink
                to='/shop'
                aria-label={({ isActive }) =>
                    isActive
                        ? 'Open "shop" page. You are here.'
                        : 'Open "shop" page'
                }
                className={({ isActive }) => (isActive ? active : inactive)}
            >
                Shop
            </NavLink>
        </div>
    );
};

const Cart = () => {
    return (
        <div>
            <NavLink
                to='/cart'
                aria-label={({ isActive }) =>
                    isActive
                        ? 'Open "cart" page. You are here.'
                        : 'Open "cart" page'
                }
                className={({ isActive }) => (isActive ? active : inactive)}
            >
                Cart
            </NavLink>
        </div>
    );
};

const Logo = () => {
    return (
        <div className='border-4 border-cop w-36 flex justify-center items-center'>
            <h1
                className='text-2xl font-extrabold'
                aria-hidden='true'
            >
                Azavehyrs
            </h1>
        </div>
    );
};

const Header = () => {
    return (
        <header className='justify-items-center grid py-4 md:grid-cols-4 sm:grid-rows-2'>
            <nav className='justify-items-center items-center w-full grid md:col-span-3 md:grid-cols-3 sm:row-start-2 sm:grid-rows-3 '>
                <About className='md:col-span-1 sm:row-span-1'></About>
                <Shop className='md:col-span-1 sm:row-span-1'></Shop>
                <Cart className='md:col-span-1 sm:row-span-1'></Cart>
            </nav>
            <Logo className='sm:row-start-1'></Logo>
        </header>
    );
};

export default Header;
