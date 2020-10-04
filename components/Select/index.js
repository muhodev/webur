import React from 'react'
import { Search, ExpandDown } from "../Icons"

function Select(props) {
    return (
        <div className="select">
            <div className="option option--selected">
                <div className="option__item d-flex align-center f-size--sm text-secondary">
                    <div className="d-flex align-center">
                        <Search />
                    </div>
                    <div className="ml-2">webur'da arayın</div>
                </div>
                {/* <div className="ml-2 d-flex align-center text-secondary">
                    <ExpandDown />
                </div> */}
            </div>
            <div className="options">

            </div>
        </div>
    )
}

export default Select