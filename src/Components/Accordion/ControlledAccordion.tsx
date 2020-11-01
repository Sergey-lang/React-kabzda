import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    onClick: (value: any) => void
    value: boolean
    items: ItemType[]
}

export function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div className="App">
            <AccordionTitleMemo title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.value && <AccordionBodyMemo items={props.items}
                                            onClick={props.onClick}
            />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitleMemo = React.memo(AccordionTitle)
const AccordionBodyMemo = React.memo(AccordionBody)

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
        </div>
    );
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody')
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => {
                    props.onClick(i.value)
                }} key={index}>{i.title}</li>)}
        </ul>
    );
}

