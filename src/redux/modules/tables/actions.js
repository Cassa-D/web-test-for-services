import { CREATENEWTABLE, MODIFYSCOREFROMTEAM } from "./types"

export const createNewTable = (table) => ({
    type: CREATENEWTABLE,
    payload: {
        table
    }
})

export const modifyScoreFromTeam = (newValue, teamIndex, tableIndex) => ({
    type: MODIFYSCOREFROMTEAM,
    payload: {
        newValue,
        teamIndex,
        tableIndex
    }
})