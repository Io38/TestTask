import React from "react";


const Button = (props) => {

    return (
        <div>
            <button onClick={props.onTimeClick} className="btn">
                sort
            </button>
        </div>
    )
}

export default Button