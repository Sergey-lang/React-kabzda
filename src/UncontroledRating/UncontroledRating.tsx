import React, {useState} from 'react';

type PropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
    setSelect: () => void
}

function UncontroledRating() {
    let [value, setSelect] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setSelect={() => {
                setSelect(1)
            }}/>
            <Star selected={value > 1} setSelect={() => {
                setSelect(2)
            }}/>
            <Star selected={value > 2} setSelect={() => {
                setSelect(3)
            }}/>
            <Star selected={value > 3} setSelect={() => {
                setSelect(4)
            }}/>
            <Star selected={value > 4} setSelect={() => {
                setSelect(5)
            }}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.setSelect()}}>{props.selected ? <b>start </b> : 'star '}</span>
}

export default UncontroledRating