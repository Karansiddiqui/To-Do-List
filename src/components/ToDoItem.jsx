import React, { useState } from "react";

function ToDoItem(props) {
    const [style, setStyle] = useState("none");

    function changeTextStyle() {
        const newStyle = style === "none" ? "line-through" : "none";
        setStyle(newStyle);
    }

    return (
        <div
            onClick={changeTextStyle}
            onDoubleClick={() => { props.onChecked(props.id) }
            }>
            <li style={{ textDecoration: style }}>{props.text}</li>
        </div>
    );
}

export default ToDoItem;
