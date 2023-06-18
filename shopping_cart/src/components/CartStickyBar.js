/** @format */

const Empty = ({ empty, zero }) => {
    return (
        <button
            onClick={() => {
                empty();
                zero();
            }}
        >
            Empty
        </button>
    );
};

const Pay = () => {
    return <button>Pay</button>;
};

const CartStickyBar = ({ value, empty, zero }) => {
    return (
        <div className='fixed bottom-0 inset-x-0'>
            <strong>Total: {value}</strong>
            <Empty
                zero={zero}
                empty={empty}
            ></Empty>
            <Pay></Pay>
        </div>
    );
};

export default CartStickyBar;
