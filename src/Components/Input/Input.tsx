import React, {ChangeEvent, useRef, useState} from 'react';

type InputPropsType = {
    value?: string
}

export const Input = () => {
    let [refValue, setRefValue] = useState('')
    let inputRef = useRef<HTMLInputElement>(null)
    let save = () => {
        const newValue = inputRef.current as HTMLInputElement
        setRefValue(newValue.value)
    }
    return (
        <div>
            <input ref={inputRef}/> {refValue}
            <button onClick={save}>add message</button>
        </div>
    )
}

export const UncontroledInput = () => {
    let [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return (
        <div>
            <input onChange={onChange}/> {value}
        </div>
    )
}

