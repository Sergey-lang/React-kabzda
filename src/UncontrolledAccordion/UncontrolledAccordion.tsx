import React, {useReducer, useState} from 'react';
import {reducer, TOGGLE_CONSTANT} from './reducer';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer,{collapsed:false})
    return (
        <div className="App">
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type:TOGGLE_CONSTANT})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
        </div>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

