import React, {useState,} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: number
    onChange: (itemValue: number) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {

    let [collapsed, setCollapsed] = useState<boolean>(false)
    let currentValue = props.items.find(i => props.value === i.value)

    const hideSelect = (itemValue: number) => {
        props.onChange(itemValue)
        setCollapsed(false)
    }

    return (
        <div className={s.select_wrapper}>
            <div className={s.currentElement}
                 onClick={() => setCollapsed(true)}
            >{currentValue && currentValue.title}</div>
            <div className={s.option_wrapper}>
                {collapsed && props.items.map((i, index) =>
                    <div className={s.element} key={index}
                         onClick={(e) => hideSelect(i.value)}
                    >{i.title}</div>)}
            </div>

        </div>
    )
}