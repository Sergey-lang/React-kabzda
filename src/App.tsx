import React, {useEffect, useState} from 'react';
import {UncontroledOnOf} from './UncontroledOnOf/UncontroledOnOf';
import './App.css';
import {ControlledRating, RatingValueType} from './Rating/ControlledRating';

export function App() {

    let [collapsedValue, setCollapsed] = useState<boolean>(true)
    let [onOf, setOnOf] = useState<boolean>(true)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [count, setState] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div className={'App'}>
            <div className='element_wrapper'>
                <UncontroledOnOf onChange={setOnOf}/>{onOf.toString()}
            </div>
            <div className='element_wrapper'>
                <ControlledRating value={ratingValue} onClick={setRatingValue}/>
            </div>
            <div className='element_wrapper'>
                <button onClick={() => setState(count + 1)}>click</button>
                <div>{count}</div>
            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

