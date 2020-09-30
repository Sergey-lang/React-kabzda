import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from '@storybook/addon-actions';
import {ControlledAccordion} from './ControlledAccordion';

export default {
    title: 'Accordion',
    component: ControlledAccordion,
}

const callbackAction = action('event fired')
const onClick = action('element clicked')

export const ShowUsersAccordion = () => <ControlledAccordion titleValue={'Users'}
                                                             onChange={callbackAction}
                                                             onClick={onClick}
                                                             value={false}
                                                             items={[
                                                       {title: 'Dima', value: 1},
                                                       {title: 'Egot', value: 2},
                                                       {title: 'Anton', value: 3}]}/>
export const CollapsedMenuAccordion = () => <ControlledAccordion titleValue={'Menu'}
                                                                 onChange={callbackAction}
                                                                 onClick={onClick}
                                                                 value={true}
                                                                 items={[]}/>
export const ChangingAccordion = () => {
    let [col, setCol] = useState<boolean>(true)
    return <ControlledAccordion titleValue={'MENU'}
                                onChange={() => setCol(!col)}
                                onClick={onClick}
                                value={col}
                                items={[
                          {title: 'Dima', value: 1},
                          {title: 'Egot', value: 2},
                          {title: 'Anton', value: 3}]}/>
}


