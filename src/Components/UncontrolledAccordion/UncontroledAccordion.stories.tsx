import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'UncontroledAccordion',
    component: UncontrolledAccordion,
}

const callbackAction = action('event fired')

export const NotChangingMenu = () => <UncontrolledAccordion titleValue={'Uncontrolled'}/>


