import React from 'react'
import { Select } from ".."
import { Filter, Search, BaseIcon } from '../Icons'

function PostTopWidget(props) {
    return (
        <div className="widget" style={{ position: "sticky", top: 0 }}>
            <div className="widget__container">
                <div className="widget__top">
                    <div className="widget__top--title">
                        Ana Sayfa
                    </div>
                    <Select selectedItemIndex={0} >

                    </Select>
                    <BaseIcon actionable>
                        <Filter />
                    </BaseIcon>

                </div>
            </div>
        </div>
    )
}

export default PostTopWidget