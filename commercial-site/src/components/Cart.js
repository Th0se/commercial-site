/** @format */
import Header from './reusables/Header';
import Footer from './reusables/Footer';

const CartItem = ({ item, handleCart, handleTotalPrice }) => {
    return (
        <div className='grid bg-tertiaryBackground sm:grid-cols-2'>
            <img
                src={item.image}
                alt={`Product preview showing a handful of ${item.name}`}
                className='w-40 col-start-1'
            ></img>
            <div className='grid grid-rows-3 text-center'>
                <h2>{item.name}</h2>
                <p>
                    <strong>{item.pricePerKilo} Wang</strong>
                </p>
                <p>{item.quantity} kilos</p>
                <button
                    aria-label={`Remove ${item} from cart`}
                    className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                    onClick={() => {
                        handleCart.remove(item);
                        handleTotalPrice.reduce(
                            item.pricePerKilo * item.quantity
                        );
                    }}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

const Cart = ({ cart, theme, totalPrice, handleCart, handleTotalPrice }) => {
    return (
        <div
            data-theme={theme}
            className='text-text bg-primaryBackground'
        >
            <Header></Header>
            <main className='bg-secondaryBackground'>
                <div className='grid p-3  items-center gap-3 sm:grid-cols-2 md:grid-cols-4 md:justify-items-center lg:grid-cols-6'>
                    {cart.map((item) => (
                        <CartItem
                            item={item}
                            handleCart={handleCart}
                            handleTotalPrice={handleTotalPrice}
                            key={item.id}
                        ></CartItem>
                    ))}
                </div>
                <div className='bg-tertiaryBackground grid grid-cols-2 grid-rows-2 p-3 gap-3'>
                    <p className='col-span-2 w-full text-center'>
                        Total price: {totalPrice} Wang
                    </p>

                    <button
                        onClick={() => {
                            handleCart.empty();
                            handleTotalPrice.reset();
                        }}
                        className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground col-span-1'
                    >
                        Empty cart
                    </button>
                    <button
                        className='border-text border-2 focus:bg-text focus:text-primaryBackground hover:bg-text hover:text-primaryBackground'
                        onClick={() =>
                            alert('The button works, but nothing will happen.')
                        }
                    >
                        Pay
                    </button>
                </div>
            </main>
            <Footer theme={theme}></Footer>
        </div>
    );
};

export default Cart;
