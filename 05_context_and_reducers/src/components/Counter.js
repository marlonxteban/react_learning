import React, { useReducer } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = {
    counter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        case 'reset':
            return {...state, counter: initialState}.counter

        default:
            return state;
    }
}
const Counter = () => {
    const [state1, dispatch] = useReducer(reducer, initialState)
    const [state2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter 1 <Badge color="secondary">{state1.counter}</Badge>
                </Button>
                <Button color="primary" outline>
                    Counter 2 <Badge color="secondary">{state2.counter}</Badge>
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
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch2({ type: 'increment', payload:1 })}>increment</Button>
                <Button color="dark" onClick={() => dispatch2({ type: 'decrement', payload:1 })}>decrement</Button>
                <Button color="danger" onClick={() => dispatch2({ type: 'reset' })}>reset</Button>
            </ButtonGroup>
            <p></p>
            
        </div>
    )
}

export default Counter
