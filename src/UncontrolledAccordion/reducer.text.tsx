import {reducer, StateType, TOOGLE_COLLAPSED} from './reducer';

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOOGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)
})

test('throw error', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOOGLE_COLLAPSED})

    //expect
    expect(()=>{reducer(state,{type:'FAKE'})}).toThrowError();
})