import React from 'react';

type AccordionPropsType = {
    titleValue: string
    onClick: (value: boolean) => void
    value: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div className="App">
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={props.value}/>
            {!props.value && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => {
                props.onClick(!props.value)
            }}>{props.title}</h3>
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

export default Accordion;
