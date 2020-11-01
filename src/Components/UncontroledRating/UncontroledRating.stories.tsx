import React from 'react';
import {UncontroledRating} from './UncontroledRating';
import {action} from '@storybook/addon-actions';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Uncontroled ControlledRating',
    component: UncontroledRating,
}

const callback = action('rating changed inside component')

export const UncontroledEmptyRatingMode = () => <UncontroledRating defaultValue={0} onChange={callback}/>
export const UncontroledRating1Mode = () => <UncontroledRating defaultValue={1} onChange={callback}/>
export const UncontroledRating2Mode = () => <UncontroledRating defaultValue={2} onChange={callback}/>
export const UncontroledRating3Mode = () => <UncontroledRating defaultValue={3} onChange={callback}/>
export const UncontroledRating4Mode = () => <UncontroledRating defaultValue={4} onChange={callback}/>
export const UncontroledRating5Mode = () => <UncontroledRating defaultValue={5} onChange={callback}/>

