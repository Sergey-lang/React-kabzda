import React, {ChangeEvent, useRef, useState} from 'react';
import {Input} from './Input';
import {action} from '@storybook/addon-actions';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Input',
    component: Input,
}

export const ControledInputStories = () => <Input/>

export const ControledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
export const ControledCheckBox = () => {
    const [checkValue, setCheckValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckValue(e.currentTarget.checked)
    }
    return <input type='checkbox' onChange={onChange} checked={checkValue}/>
}
export const ControledSelect = () => {
    const [selectValue, setDelectValue] = useState<string | undefined>('2')
    const onSelChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDelectValue(e.currentTarget.value)
    }
    return <select value={selectValue} onChange={onSelChange}>
        <option value="1">Minsk</option>
        <option value="2">USA</option>
        <option value="3">Russia</option>
        <option value="4">Poland</option>
    </select>
}
