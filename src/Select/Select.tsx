import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'
import {UsersSecret} from '../ReactUseMemo/UseMemoUseCallback.stories';


export type ItemType = {
    title: string
    value: any
    population: number
    cities:Array<string>
}

type SelectPropsType = {
    value?: any
    onChange: (itemValue: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {
    console.log('Select rerender')

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElement(props.value);
    }, [props.value])


    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={s.items_wrapper}>
                {props.items.map(i => <div className={s.item + ' ' + (hoveredElement === i ? s.selected : '')}
                                           key={i.value}
                                           onMouseEnter={() => {
                                               setHoveredElement(i.value)
                                           }}
                                           onClick={() => onItemClick(i.value)}
                >{i.title}</div>)}
            </div>
            }
        </div>
    )
}