import React from 'react';
import './App.css';
import Accordion from './Accordion';
import Rating from './Rating';

function App() {
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={5}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={3}/>
        </div>
    );
}

type PageTitlePropsType = {
    title:string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
