import React from 'react';

type AccordionPropsType = {
    titleValue: string
    onClick: () => void
    value: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div className="App">
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.value && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => props.onClick()}>{props.title}</h3>
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

