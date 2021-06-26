import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useCounter from '../customHook/UseCounter';
import { Button, ButtonGroup, Badge } from 'reactstrap';


const ComponentA = () => {
    const [count, increment, decrement, reset] = useCounter(10, 5);
    return (
        <div>
            <ButtonGroup>
                <Button color="primary">
                    Component A counter <Badge color="secondary">{count}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={increment}>
                    increment
                </Button>
                <Button color="warning" onClick={decrement}>
                    decrement
                </Button>
                <Button color="danger" onClick={reset}>
                    reset
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default ComponentA
