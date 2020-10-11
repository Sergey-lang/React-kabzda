import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
}

const valueChanged = action('value changed')

export const WithValue: React.FC = () => {

    const [value, setValue] = useState('2')

    return (
        <Select value={value} onChange={setValue} items={[
            {title: 'RU', value: 25618, population: 1000000, cities: ['Москва', 'СПБ']},
            {title: 'BY', value: 6816165, population: 6000000, cities: ['Минск', 'Брест']},
            {title: 'UK', value: 86, population: 10000000, cities: ['Киев', 'Харьков']},
            {title: 'USA', value: 92, population: 150000000, cities: ['Нью-йорк', 'Лос-Анжелес']},
            {title: 'PL', value: 9287, population: 1000000, cities: ['Варшава', 'Краков']},
            {title: 'CH', value: 928168, population: 2000000, cities: ['Пекин', 'Шанхай']},
        ]
        }/>
    )
}

export const WithoutValue: React.FC = () => {
    const [value, setValue] = useState(null)

    return (
        <Select value={value} onChange={setValue} items={[
            {title: 'RU', value: 25618, population: 1000000, cities: ['Москва', 'СПБ']},
            {title: 'BY', value: 6816165, population: 6000000, cities: ['Минск', 'Брест']},
            {title: 'UK', value: 86, population: 10000000, cities: ['Киев', 'Харьков']},
            {title: 'USA', value: 92, population: 150000000, cities: ['Нью-йорк', 'Лос-Анжелес']},
            {title: 'PL', value: 9287, population: 1000000, cities: ['Варшава', 'Краков']},
            {title: 'CH', value: 928168, population: 2000000, cities: ['Пекин', 'Шанхай']},
        ]
        }/>
    )
}


