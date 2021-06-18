import React, { useEffect } from 'react'
let renderCount = 1
const ComponentB = (props) => {
    useEffect(() => {
        renderCount++
        
    })
    return (
        <div>
              <h1>
                  Component B : render {renderCount} times || counter: {props.count}
              </h1>
        </div>
    )
}

export default ComponentB
