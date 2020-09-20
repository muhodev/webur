import React from 'react'

function Avatar(props) {
    return (
        <div className={`avatar avatar--${props.size || "md"}`}>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Avatar