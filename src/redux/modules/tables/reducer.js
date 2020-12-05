import { CREATENEWTABLE, MODIFYSCOREFROMTEAM } from "./types"

// {
//     name: "Table 1",
//     award: "Carro",
//     descriptionForWin: "Needs 10 points to WIN!",
//     neededScore: 10,
//     teams: [
//         { teamName: "Os topzera piá", points: 0 },
//         { teamName: "Os grandes velhos", points: 10 }
//     ]
// }

const defaultState = []

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATENEWTABLE:
            return [...state, action.payload.table]
        case MODIFYSCOREFROMTEAM:
            const { newValue, teamIndex, tableIndex } = action.payload
            let modifiedTable = state[tableIndex]
            modifiedTable.teams[teamIndex].points = newValue

            let newState = state
            newState[tableIndex] = modifiedTable

            return newState
        default:
            return state;
    }
}

export default reducer