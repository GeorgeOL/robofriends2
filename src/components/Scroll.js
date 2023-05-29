import React from "react";

const Scroll = (props) => {
    return (
        <dl style={{overflowY: 'scroll', height: '490px'}}>
            {props.children}
        </dl>
    )
}

export default Scroll;