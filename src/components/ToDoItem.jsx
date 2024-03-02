import React, { useState } from "react";

function ToDoItem(props) {
    const [style, setStyle] = useState("none");

    function changeTextStyle() {
        // Toggle between "none" and "line-through"
        const newStyle = style === "none" ? "line-through" : "none";
        setStyle(newStyle);
    }

    return (
        <div onClick={changeTextStyle}>
            <li onClick={() => { props.onChecked(props.id) }} style={{ textDecoration: style }}>{props.text}</li>
        </div>
    );
}

export default ToDoItem;
