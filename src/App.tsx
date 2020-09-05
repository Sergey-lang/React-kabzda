import React, {useState} from 'react';
import './App.css';
import Accordion from './Accordion/Accordion';
import Rating, {RatingValueType} from './Accordion/Rating';
import ControlledOnOf from './ofOn/ControlledOfOn';
import UncontrolOnOf from './ofOn/UncontrolOfOn';

function App() {

    let [collapsedValue, setCollapsed] = useState<boolean>(true)
    let [onOf, setOnOf] = useState<boolean>(true)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

    return (
        <div className={'App'}>
            <hr/>
            <UncontrolOnOf onChange={setOnOf}/>{onOf.toString()}
            <hr/>
            {/*<ControlledOnOf value={onOf} onChange={setOnOf}/>*/}
            {/*<UncontrolledAccordion titleValue={'Uncontrol Accordion'}/>*/}
            <hr/>
            {/*<UncontroledRating/>*/}
            <hr/>
            <Accordion titleValue={'Control Accordion'} onClick={() => {
                setCollapsed(!collapsedValue)
            }} value={collapsedValue}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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

export default App;
