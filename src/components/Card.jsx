import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Zoom from '@mui/material/Zoom';

function Card(props) {
    const [show, setShow] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);

    function select() {
        if (!props.disabled) {
            setShow(!show)
            if(!show) {
                setQuantity(1);
            };
        }
    }

    function add() {
        if (!props.disabled) {
            setQuantity(quantity + 1);
        }
    }

    function minus() {
        if (quantity > 0 && !props.disabled) {
            setQuantity(quantity - 1);
        }
    }

    return <div className="card">
        <div onClick={select}>
            <img src={props.src} alt={props.name} />
            <p>{props.name}</p>
            <p>${(props.price).toFixed(2)}</p>
        </div>
        {show && (<Zoom in={show}>
            <div> 
                <p className="quantity-container">
                    <RemoveCircleIcon onClick={minus}/>
                    <span>{quantity} </span>
                    <AddCircleIcon onClick={add}/>
                </p>
                <p id={props.id} 
                    className="addToCart-btn" 
                    onClick={(event) => {
                        if (!props.disabled) {
                            props.addToCart(event, quantity);
                        }
                    }}
                >Add To Cart</p>
            </div>
        </Zoom>)}
    </div>
};

export default Card;