import { CREATENEWTABLE, MODIFYSCOREFROMTEAM, ADDNEWTEAMTOTABLE } from "./types"

const defaultState = []

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATENEWTABLE:
            const { table } = action.payload
            table.teams = []

            return [...state, table]
        case MODIFYSCOREFROMTEAM:
            const { newValue, teamIndex, tableIndex } = action.payload

            let modifiedTable = state[tableIndex]
            modifiedTable.teams[teamIndex].points = newValue

            let newState = [...state]
            newState[tableIndex] = modifiedTable

            return newState
        case ADDNEWTEAMTOTABLE:
            const { teamName, tableIndex: index } = action.payload

            let addingTeamToTable = state[index]
            addingTeamToTable.teams.push({ teamName, points: 0 })

            let newState2 = [...state]
            newState2[index] = addingTeamToTable

            return newState2
        default:
            return state
    }
}

export default reducer