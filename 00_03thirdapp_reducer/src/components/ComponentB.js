import React, {useContext} from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import { CounterContext } from '../App';
import ComponentC from './ComponentC';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
    const counterContext = useContext(CounterContext)
    console.log(counterContext)
    const {counter, dispatch} = counterContext
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Component B Counter <Badge color="secondary">{counter}</Badge>
                </Button>
         
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment', payload:1 })}>increment</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement', payload:1 })}>decrement</Button>
                <Button color="danger" onClick={() => dispatch({ type: 'reset' })}>reset</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment', payload:5 })}>increment by 5</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement', payload:5 })}>decrement by 5</Button>
                <Button color="danger" onClick={() => dispatch({ type: 'reset' })}>reset</Button>
            </ButtonGroup>
            <p>
            </p>
           <ComponentC />
        </div>
    )
}

export default ComponentB
