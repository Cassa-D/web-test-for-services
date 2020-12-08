import { LISTALLTABLES, CREATENEWTABLE, MODIFYSCOREFROMTEAM, ADDNEWTEAMTOTABLE, TEAMHAVEWIN } from "./types"

const defaultState = []

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LISTALLTABLES:
            const { tables } = action.payload
            return [...tables]
        case ADDNEWTEAMTOTABLE:
            const { teams, tableId } = action.payload

            let newState2 = [...state]
            newState2[tableId - 1].teams = teams

            return newState2
        case CREATENEWTABLE:
            const { table } = action.payload
            return [...state, table]
        case MODIFYSCOREFROMTEAM:
            const { newValue, teamId, tableIndex } = action.payload

            let newState = [...state]
            newState[tableIndex - 1].teams.find(currTeam => currTeam.id === teamId).score = newValue

            return newState
        case TEAMHAVEWIN:
            const { tableWithWin } = action.payload
            
            let newState3 = [...state]
            newState3[tableWithWin.id - 1] = tableWithWin

            return newState3
        default:
            return state
    }
}

export default reducer