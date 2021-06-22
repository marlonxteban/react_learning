import React, {useState, useEffect, useRef} from 'react'

const Component = () => {
    const [count, setCount] = useState(0);
    const componentRef = useRef(true);
    useEffect(() => {
        
        return () => {
            componentRef.current = false;
        }
    }, [])
    const fakefetch = () => {
        setTimeout(() => {
            //si se trata de editar un valor dentro de un componente desmontado va a dar un error, 
            //por esto se comprueba primero si el componente existe, si existe se hace el update, caso contrario no.
            if(componentRef.current){
                setCount(count + 1);
            }
        }, 2000);
    }
    return (
        <div>
            <h1>Component counter: {count}</h1>
            <button onClick={fakefetch}>fake fetch</button>
        </div>
    )
}

export default Component
