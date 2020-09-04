import React, {useState} from 'react';
import './App.css';
import Accordion from './Accordion/Accordion';
import Rating, {RatingValueType} from './Accordion/Rating';
import OnOf from './ofOn/OfOn';
import UncontroledRating from './UncontroledRating/UncontroledRating';
import ControlledOnOf from './ofOn/ControlledOfOn';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [collapsedValue, setCollapsed] = useState<boolean>(true)
    let [onOf, setOnOf] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <hr/>
            <OnOf/>
            <hr/>
            <ControlledOnOf value={onOf} onClick={setOnOf}/>
            {/*<UncontrolledAccordion titleValue={'Uncontrol Accordion'}/>*/}
            <hr/>
            <UncontroledRating/>
            <hr/>
            <Accordion titleValue={'Control Accordion'} onClick={setCollapsed} value={collapsedValue}/>
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
