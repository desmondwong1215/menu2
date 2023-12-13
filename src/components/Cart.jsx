import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Zoom from '@mui/material/Zoom';
import CancelIcon from '@mui/icons-material/Cancel';
import CartCard from "./CartCard";

function Cart(props) {
    function generateStyle() {
        console.log(props.length);
       return props.length > 4 ? {height: "max(500px)"} : {};
    }
    return <div>
        {props.isOpen ? <Zoom in={props.isOpen}>
                        <div className="cart-container" style={generateStyle()}>
                            <CancelIcon onClick={props.handleClick} style={{height:"36px", width:"36px"}}/>
                            {props.length > 0 ? <div className="cart-list"> 
                                {props.items.map((item) => <CartCard 
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    src={item.src}
                                    price={item.price}
                                    quantity={item.quantity}
                                    change={props.change}
                                />)}
                                <div className="detail">
                                   <p>Total Price: ${(props.totalPrice).toFixed(2)}</p>
                                   <p className="confirm-btn" onClick={props.confirm}>Confirm</p>
                                </div>
                            </div> : <p>The cart is empty!</p>}
                        </div>
                    </Zoom>
                    :  <Zoom in={!props.isOpen}>
                                <p className="cart-btn"><ShoppingCartIcon onClick={props.handleClick} style={{height:"48px", width:"48px"}}/></p>
                        </Zoom> 
        }
        {!props.isOpen && props.length > 0 && <Zoom in={!props.isOpen}>
                    <p className="item-quantity" onClick={props.handleClick}>{props.length}</p>
                </Zoom>
        }
    </div>
}

export default Cart;