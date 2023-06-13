/** @format */

const Total = ({ value }) => {
    return (
        <div>
            <p>total: {value}</p>
        </div>
    );
};

const Empty = () => {
    return <button>Empty</button>;
};

const Pay = () => {
    return <button>Pay</button>;
};

const CartStickyBar = ({ value }) => {
    return (
        <div>
            <Total value={value}></Total>
            <Empty></Empty>
            <Pay></Pay>
        </div>
    );
};

export default CartStickyBar;
