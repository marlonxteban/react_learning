import React, { useEffect } from 'react'
let renderCount = 1
const ComponentA = (props) => {
    useEffect(() => {
        renderCount++
        
    })
    return (
        <div>
              <h1>
                  Component A : render {renderCount} times || counter: {props.count}
              </h1>
        </div>
    )
}

export default ComponentA
