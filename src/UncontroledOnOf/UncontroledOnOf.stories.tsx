import React from 'react';
import {UncontroledOnOf} from './UncontroledOnOf';
import {action} from '@storybook/addon-actions';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'OnOf',
    component: UncontroledOnOf
}

let callback = action('clicked')

export const UncontroledModeOnOF = () => <UncontroledOnOf defaultValue={true} onChange={callback}/>

