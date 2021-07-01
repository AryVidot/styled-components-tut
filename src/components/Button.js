import React from 'react'

// destructure from the from a component called className
function Button({className ,buttonLabel}) {
    return (
        <button className={className}>
            {buttonLabel}
        </button> 
    )
}
export default Button;