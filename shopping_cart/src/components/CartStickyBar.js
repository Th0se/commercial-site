/** @format */

const Empty = ({ empty, zero }) => {
    return (
        <button
            onClick={() => {
                empty();
                zero();
            }}
            className='border'
        >
            Empty
        </button>
    );
};

const Pay = () => {
    return <button className='border'>Pay</button>;
};

const CartStickyBar = ({ value, empty, zero }) => {
    return (
        <div className='fixed bottom-0 inset-x-0 grid grid-cols-2 grid-row-2 font-bold bg-emerald-400'>
            <strong className='text-center col-span-2 border'>
                Total: {value} Wang
            </strong>
            <Empty
                zero={zero}
                empty={empty}
            ></Empty>
            <Pay></Pay>
        </div>
    );
};

export default CartStickyBar;
