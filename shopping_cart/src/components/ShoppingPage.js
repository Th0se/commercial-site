/** @format */

import { ShopCard } from './templates/ProductCards';

import { NavLink } from 'react-router-dom';

const ShoppingPage = ({ object }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {object.map((item) => {
                return (
                    <NavLink
                        to={item.id}
                        key={item.id}
                    >
                        <ShopCard item={item}></ShopCard>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default ShoppingPage;
