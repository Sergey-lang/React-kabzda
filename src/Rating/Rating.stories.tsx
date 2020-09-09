import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} onClick={a => a}/>
export const Rating1 = () => <Rating value={1} onClick={a => a}/>
export const Rating2 = () => <Rating value={2} onClick={a => a}/>
export const Rating3 = () => <Rating value={3} onClick={a => a}/>
export const Rating4 = () => <Rating value={4} onClick={a => a}/>
export const Rating5 = () => <Rating value={5} onClick={a => a}/>
export const RatingChanging = () => {
    let [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}
