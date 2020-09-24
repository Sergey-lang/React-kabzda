

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOOGLE_COLLAPSED = 'TOGGLE-CONSTANT'
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOOGLE_COLLAPSED:
           return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bag action type')
    }
    return state
}