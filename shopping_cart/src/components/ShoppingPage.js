/** @format */

import { ShopCard } from './templates/ProductCards';
import ShopStickyBar from './ShopStickyBar';

const Products = ({ object }) => {
    return (
        <div>
            {object.map((item) => {
                return <ShopCard item={item}></ShopCard>;
            })}
        </div>
    );
};

const ShoppingPage = ({ object }) => {
    return (
        <div>
            <Products object={object}></Products>
        </div>
    );
};

export default ShoppingPage;
