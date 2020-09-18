import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from '@storybook/addon-actions';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
}


export const ChoseItemFromList: React.FC = () => {
    let [value, setValue] = useState<number>(2)
    return <Select value={value}
                   onChange={(itemValue: number) => {
                       setValue(itemValue)
                   }}
                   items={[
                       {title: 'Egor', value: 1},
                       {title: 'Anna', value: 2},
                       {title: 'Stas', value: 3},
                       {title: 'Misha', value: 4}]}/>
}


