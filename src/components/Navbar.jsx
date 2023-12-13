import React from "react"

function Navbar(props) {
    function generateStyle(bool) {
        return bool ? {
            textDecoration: "underline",
            color: "#B4B4B3",
            borderWidth: "3px",
            borderStyle: "inset inset hidden inset",
            borderRadius: "5%",
            boxShadow: "5px 5px 3px black inset"
        } : {
            border: "3px outset",
            boxShadow: "5px 5px 3px black"
        };
    }
    return <div className="navbar">
            <p onClick={props.selectType} style={generateStyle(props.select.F)}> Food </p>
            <p onClick={props.selectType} style={generateStyle(props.select.B)}> Beverage </p>
            <p onClick={props.selectType} style={generateStyle(props.select.D)}> Delicacies and Snacks </p>
    </div>
}

export default Navbar;