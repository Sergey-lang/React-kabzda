import React, {useState} from 'react';

type OnPropsType = {
    value: boolean
    onChange: (value: boolean) => void
}

function ControlledOnOf(props: OnPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.value ? 'green' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.value ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.value ? 'green' : 'red',
    }

    return <div>
        <div style={onStyle} onClick={() => {
            props.onChange(true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            props.onChange(false)
        }}>Of
        </div>
        <div style={indicatorStyle}></div>
    </div>
}

export default ControlledOnOf

