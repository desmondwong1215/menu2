import React from "react";
import Card from "./Card";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";


function App() {
    const [select, setSelect] = React.useState({F: true, B: false, D: false});
    const [typeList, setTypeList] = React.useState(food);
    const [isCartOpen, setCartOpen] = React.useState(false);
    const [listInCart, setListInCart] = React.useState([]);
    const [length, setLength] = React.useState(listInCart.length);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [isConfirm, setConfirm] = React.useState(false);

    function selectType(event) {
        if (isCartOpen) {
            return;
        }
        const type = event.target.outerText;
        if (type === "Food") {
            setSelect({F: true, B: false, D: false});
            setTypeList(food);
        } else if (type === "Beverage") {
            setSelect({F: false, B: true, D: false});
            setTypeList(beverage);
        } else {
            setSelect({F: false, B: false, D: true});
            setTypeList(delicacy);
        }
    }

    function addToCart(event, quantity) {
        const {id} = event.target;
        const duplicate = listInCart.filter((item) => item.id === id);
        if (duplicate.length === 0) {
            var selectedItem = typeList.find((item) => item.id === id);
            selectedItem.quantity = parseInt(quantity);
            if (selectedItem.quantity > 0) {
                setListInCart((prev) => {
                    calculateTotalPrice([...prev, selectedItem]);
                    return [...prev, selectedItem]
                }); 
                setLength(length + 1);
            }
        }
    }

    function openCart() {
        setCartOpen(!isCartOpen);
    }

    function closeCart() {
        if (isCartOpen) {
            setCartOpen(false);
        }
    }

    function change(event, newQuantity) {
        const {id} = event.target;
        const index = listInCart.findIndex((item) => item.id === id);
        if (newQuantity === 0) {
            setListInCart((prev) => {
                prev.splice(index, 1);
                calculateTotalPrice(prev);
                setLength(length - 1);
                return prev;
            });
        } else {
            setListInCart((prev) => {
                prev[index].quantity = newQuantity;
                calculateTotalPrice(prev);
                return prev;
            })
        }
    }

    function calculateTotalPrice(list) {
        var sum = 0;
        list.forEach((item) => {
            sum += (item.quantity * item.price);
        })
        setTotalPrice(sum);
    }

    function confirm() {
        setConfirm(true);
    }

    function generateStyle() {
        return isCartOpen ? {filter: "blur(1.5px)"} : {};
    }

    return <div>
            {isConfirm ? <div className="confirm-page"><h1>Please enjoy your meal!</h1></div> : <div>
                <div style={generateStyle()} onClick={closeCart}>
                    <Header />
                    <Navbar selectType={selectType} select={select}/>
                    <div className="menu">
                        {typeList.map((item) => <Card 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            src={item.src}
                            price={item.price}
                            addToCart={addToCart}
                            disabled={isCartOpen}
                        />)}
                    </div>
                </div>
                
                <Cart 
                    handleClick={openCart}
                    isOpen={isCartOpen}
                    items={listInCart} 
                    change={change} 
                    length={length}
                    totalPrice={totalPrice}
                    confirm={confirm}
                />
                <Footer />
        </div>}
    </div>
}

var food = [
    {
        id: "f1",
        name: "Fried Rice",
        src: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.50,
        quantity: 1
    },
    {
        id: "f2",
        name: "Fried Noodle",
        src: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.00,
        quantity: 1
    },
    {
        id: "f3",
        name: "Fried Noodle",
        src: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.00,
        quantity: 1
    },
    {
        id: "f4",
        name: "Fried Noodle",
        src: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.00,
        quantity: 1
    },
    {
        id: "f5",
        name: "Fried Noodle",
        src: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.00,
        quantity: 1
    },
    {
        id: "f6",
        name: "Fried Noodle",
        src: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.00,
        quantity: 1
    },
    {
        id: "f7",
        name: "Fried Noodle",
        src: "https://images.pexels.com/photos/5848494/pexels-photo-5848494.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.00,
        quantity: 1
    }
];

var beverage = [
    {
        id: "b1",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    },
    {
        id: "b2",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    },
    {
        id: "b3",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    },
    {
        id: "b4",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    },
    {
        id: "b5",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    },
    {
        id: "b6",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    },
    {
        id: "b7",
        name: "Lemon Tea",
        src: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 3.00,
        quantity: 1
    }
];

var delicacy = [
    {
        id: "d1",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    },
    {
        id: "d2",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    },
    {
        id: "d3",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    },
    {
        id: "d4",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    },
    {
        id: "d5",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    },
    {
        id: "d6",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    },
    {
        id: "d7",
        name: "French Fries",
        src: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5.00,
        quantity: 1
    }
];

export default App;