import { CREATENEWTABLE, MODIFYSCOREFROMTEAM, ADDNEWTEAMTOTABLE } from "./types"

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

export const addNewTeamToTable = (teamName, tableIndex) => ({
    type: ADDNEWTEAMTOTABLE,
    payload: {
        teamName,
        tableIndex
    }
})