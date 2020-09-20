import React from 'react'

function Flex(props) {

    let classNames = "d-flex "

    if (props.alignCenter) {
        classNames += "align-center ";
    }
    if (props.alignStart) {
        classNames += "align-start ";
    }
    if (props.justifyCenter) {
        classNames += "justify-center";
    }

    return (
        <div className={classNames} >
            {props.children}
        </div>
    )
}

export default Flex