import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callbackAction = action('event fired')
const onClick = action('element clicked')

export const ShowUsersAccordion = () => <Accordion titleValue={'Users'}
                                                   onChange={callbackAction}
                                                   onClick={onClick}
                                                   value={false}
                                                   items={[
                                                       {title: 'Dima', value: 1},
                                                       {title: 'Egot', value: 2},
                                                       {title: 'Anton', value: 3}]}/>
export const CollapsedMenuAccordion = () => <Accordion titleValue={'Menu'}
                                                       onChange={callbackAction}
                                                       onClick={onClick}
                                                       value={true}
                                                       items={[]}/>
export const ChangingAccordion = () => {
    let [col, setCol] = useState<boolean>(true)
    return <Accordion titleValue={'MENU'}
                      onChange={() => setCol(!col)}
                      onClick={onClick}
                      value={col}
                      items={[
                          {title: 'Dima', value: 1},
                          {title: 'Egot', value: 2},
                          {title: 'Anton', value: 3}]}/>
}


