import React, {useState} from 'react';
import {ControlledRating, RatingValueType} from './ControlledRating';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Rating',
    component: ControlledRating,
}

export const EmptyRating = () => <ControlledRating value={0} onClick={a => a}/>
export const Rating1 = () => <ControlledRating value={1} onClick={a => a}/>
export const Rating2 = () => <ControlledRating value={2} onClick={a => a}/>
export const Rating3 = () => <ControlledRating value={3} onClick={a => a}/>
export const Rating4 = () => <ControlledRating value={4} onClick={a => a}/>
export const Rating5 = () => <ControlledRating value={5} onClick={a => a}/>
export const RatingChanging = () => {
    let [rating, setRating] = useState<RatingValueType>(3)
    return <ControlledRating value={rating} onClick={setRating}/>
}
