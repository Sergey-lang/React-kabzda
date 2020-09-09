import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callbackAction = action('event fired')

export const ShowUsersAccordion = () => <Accordion titleValue={'Users'} onClick={callbackAction} value={false}/>
export const CollapsedMenuAccordion = () => <Accordion titleValue={'Menu'} onClick={callbackAction} value={true}/>
export const ChangingAccordion = () => {
    let [col, setCol] = useState<boolean>(true)
    return <Accordion titleValue={'MENU'} onClick={() => setCol(!col)} value={col}/>
}


