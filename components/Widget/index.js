import React from 'react'

function Widget(props) {
    return (
        <div className="widget">
            <div className="widget__container">
                {props.children}
            </div>
        </div>
    )
}

export default Widget