import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import ControlledOnOf from './ControlledOnOf';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOf',
    component: ControlledOnOf,
}

const callbackAction = action('on or off clicked')

export const OnModeControled = () => <ControlledOnOf value={true} onChange={callbackAction}/>
export const OfModeControled = () => <ControlledOnOf value={false} onChange={callbackAction}/>
export const ChangingOnOf = () => {
    let [value, setValue] = useState<boolean>(true)
    return <ControlledOnOf value={value} onChange={setValue}/>
}

