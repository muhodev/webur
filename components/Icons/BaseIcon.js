import React from 'react'

function BaseIcon({ size, children, actionable }) {
    return (
        <div className={`icon icon--${size} d-flex align-center ${actionable ? "icon--actionable" : ""}`}>
            {children}
        </div>
    )
}

export default BaseIcon