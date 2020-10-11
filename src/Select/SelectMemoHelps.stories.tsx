import React, {useMemo, useState} from 'react';
import {ItemType, Select} from './Select';

export default {
    title: 'Select',
    component: Select,
}


const SelectM = React.memo(Select)
export const SelectMemoHelp: React.FC = () => {
    console.log('SelectMemoHelp rerender')

    const countriesArray = [
        {title: 'RU', value: 25618, population: 1000000, cities: ['Москва', 'СПБ']},
        {title: 'BY', value: 6816165, population: 6000000, cities: ['Минск', 'Брест']},
        {title: 'UK', value: 86, population: 10000000, cities: ['Киев', 'Харьков']},
        {title: 'USA', value: 92, population: 150000000, cities: ['Нью-йорк', 'Лос-Анжелес']},
        {title: 'PL', value: 9287, population: 1000000, cities: ['Варшава', 'Краков']},
        {title: 'CH', value: 928168, population: 2000000, cities: ['Пекин', 'Шанхай']},
    ]

    const [value, setValue] = useState(25618)
    const [counter, setCounter] = useState(0)
    const [countries, setCountry] = useState(countriesArray)

    let newArray = countries.filter(c => {
        for(let i = 0; i <= c.cities.length; i++) {
            if(c.cities[i] === 'Шанхай') {
                return c.cities[i]
            }
        }
    })

    return (
        <>
            <div>{countries.map((el,i )=> <p key={i}>{el.title}</p>)}</div>
            <button onClick={ ()=>setCounter(counter + 1) }>Simple counter</button>
            {counter}
            <button onClick={ ()=>setCountry(newArray) }>Find Shanghai</button>
            <button onClick={ ()=>setCountry(countriesArray) }>All countries</button>
            <SelectM value={value} onChange={setValue} items={countries}/>
        </>
    )
}


