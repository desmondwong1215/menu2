import React from "react";

function CartCard(props) {
    const [quantity, setQuantity] = React.useState(props.quantity);
    const [remove, setRemove] = React.useState(false);

    function add(event) {
        setQuantity(quantity + 1);
        props.change(event, quantity + 1);
    }

    function minus(event) {
        setQuantity(quantity - 1);
        if (quantity === 1) {
            setRemove(true);
        }
        props.change(event, quantity - 1);
    }

    function cancel(event) {
        setRemove(true);
        setQuantity(0);
        props.change(event, 0);
    }

    return <div>
                {!remove && (<div className="cart-card">
                    <img src={props.src} alt={props.name} />
                    <p className="p1">{(props.price).toFixed(2)} * {quantity}</p>
                    <p className="p2"><span id={props.id} onClick={minus} className="cart-button minus">-</span> 
                    <span id={props.id} onClick={add} className="cart-button add">+</span></p>
                    <p className="p3">${(props.price * quantity).toFixed(2)}</p>
                    <p className="p4"><span id={props.id} onClick={cancel} className="cart-button cancel">x</span></p>
                </ div>)}
            </div>;
}

export default CartCard;