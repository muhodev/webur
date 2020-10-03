import React from 'react'
import { makeClasses } from "../../utils"

const boxClassesProperties = {
    flex: "d-flex",
    alignCenter: "align-center",
    alignStart: "align-start",
    alignEnd: "align-end",
    justifyCenter: "justify-center",
    spaceBetween: "space-between",
    justifyStart: "justify-start",
    justifyEnd: "justfiy-end"
}

function Box(props) {
    let className = makeClasses(props, boxClassesProperties, "box");

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Box