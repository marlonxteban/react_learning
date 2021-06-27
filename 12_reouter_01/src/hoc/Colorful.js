import React from 'react'

const Colorful = (WrappedComponent) => {
    const colors = [
        "text-primary",
        "text-secondary",
        "text-success",
        "text-danger",
        "text-warning",
        "text-info",
        "text-light",
        "text-dark",
        "text-body",
        "text-muted",
        "text-white",
        "text-black-50",
        "text-white-50",
    ]
    const color = colors[Math.floor(Math.random() * 11)]
    return (props) => {
        return (
            <div className={color}>
                <WrappedComponent {...props} />
            </div>
        )

    }
}

export default Colorful
