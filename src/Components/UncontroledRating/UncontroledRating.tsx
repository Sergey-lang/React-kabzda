import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontroledRating(props: RatingPropsType) {
    let [value, setSelect] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} setSelect={() => {
                setSelect(1);
                props.onChange(1);
            }}/>
            <Star selected={value > 1} setSelect={() => {
                setSelect(2);
                props.onChange(2);
            }}/>
            <Star selected={value > 2} setSelect={() => {
                setSelect(3);
                props.onChange(3);
            }}/>
            <Star selected={value > 3} setSelect={() => {
                setSelect(4);
                props.onChange(4);
            }}/>
            <Star selected={value > 4} setSelect={() => {
                setSelect(5);
                props.onChange(5);
            }}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setSelect: () => void
}

function StarItem(props: StarPropsType) {
    return <span onClick={() => {
        props.setSelect()
    }}>{props.selected ? <b>start </b> : 'star '}</span>
}

const Star = React.memo(StarItem)

