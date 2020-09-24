import React, {useEffect, useState} from 'react';
import {Accordion} from './Accordion/Accordion';
import {UncontroledOnOf} from './UncontroledOnOf/UncontroledOnOf';
import './App.css';
import {RatingValueType, Rating} from './Rating/Rating';

export function App() {

    let [collapsedValue, setCollapsed] = useState<boolean>(true)
    let [onOf, setOnOf] = useState<boolean>(true)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let[count,setState] = useState(0)
    useEffect(()=>{
        document.title = `you cliked ${count} times`
    })

    return (
        <div className={'App'}>
            <hr/>
            <UncontroledOnOf onChange={setOnOf}/>{onOf.toString()}
            <hr/>
            {/*<Accordion titleValue={'Control Accordion'} onChange={() => {*/}
            {/*    setCollapsed(!collapsedValue)*/}
            {/*}} value={collapsedValue}/>*/}
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <button onClick={()=>setState(count+1)}>click</button>
            <div>{count}</div>
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

