import { CREATENEWTEAM, LISTALLTEAMS } from "./types"

const defaultState = []

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATENEWTEAM:
            const { team } = action.payload
            return [...state, team]
        case LISTALLTEAMS:
            const { teams } = action.payload
            return [...teams]
        default:
            return state
    }
}

export default reducer