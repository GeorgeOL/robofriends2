import React from "react";

const Scroll = (props) => {
    return (
        <dl style={{overflowY: 'scroll', height: '450px'}}>
            {props.children}
        </dl>
    )
}

export default Scroll;