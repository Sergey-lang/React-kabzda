import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from '@storybook/addon-actions';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
}

const valueChanged = action('value changet')


export const WithValue: React.FC = () => {
    const [value, setValue] = useState('2')
    return (
        <Select value={value} onChange={setValue} items={[
            {title: 'Moscow', value: '1'},
            {title: 'Kiev', value: '2'},
            {title: 'Minsk', value: '3'},]
        }/>
    )
}


export const WithoutValue: React.FC = () => {
    const [value, setValue] = useState(null)

    return (
        <Select value={value} onChange={setValue} items={[
            {title: 'Moscow', value: '1'},
            {title: 'Kiev', value: '2'},
            {title: 'Minsk', value: '3'},]
        }/>
    )
}


