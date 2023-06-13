/** @format */

import { CartCard } from './templates/ProductCards';
import CartStickyBar from './CartStickyBar';

const CartItem = ({ array, onClick }) => {
    return (
        <div>
            {array.map((item) => {
                return (
                    <CartCard
                        item={item}
                        onClick={onClick}
                    ></CartCard>
                );
            })}
        </div>
    );
};

const Cart = ({ array, onClick, value }) => {
    return (
        <div>
            <CartItem
                array={array}
                onClick={onClick}
            ></CartItem>
            <CartStickyBar value={value}></CartStickyBar>
        </div>
    );
};

export default Cart;
