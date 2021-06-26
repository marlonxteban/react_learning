import {useState} from 'react'

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const clearText = () => {
        setValue(initialValue)
    }
    const bindForm = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    return [value, bindForm, clearText]
}

export default useInput
