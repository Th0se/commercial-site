/** @format */

import { CartCard } from './templates/ProductCards';
import CartStickyBar from './CartStickyBar';

const CartItem = ({ array, decrease, remove }) => {
    return (
        <div className='place-content-center grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-500 pt-4 pb-3'>
            {array.map((item) => {
                return (
                    <CartCard
                        item={item}
                        decrease={decrease}
                        remove={remove}
                        key={item.id}
                    ></CartCard>
                );
            })}
        </div>
    );
};

const Cart = ({ array, decrease, total, remove, empty, zero }) => {
    return (
        <div>
            <CartItem
                array={array}
                decrease={decrease}
                remove={remove}
            ></CartItem>
            <CartStickyBar
                value={total}
                empty={empty}
                zero={zero}
            ></CartStickyBar>
        </div>
    );
};

export default Cart;
