import { LISTALLTABLES, CREATENEWTABLE, MODIFYSCOREFROMTEAM, ADDNEWTEAMTOTABLE, TEAMHAVEWIN } from "./types"

export const listAllTables = (tables) => ({
    type: LISTALLTABLES,
    payload: {
        tables
    }
})

export const createNewTable = (table) => ({
    type: CREATENEWTABLE,
    payload: {
        table
    }
})

export const modifyScoreFromTeam = (newValue, teamId, tableIndex) => ({
    type: MODIFYSCOREFROMTEAM,
    payload: {
        newValue,
        teamId,
        tableIndex
    }
})

export const addNewTeamToTable = (teams, tableId) => ({
    type: ADDNEWTEAMTOTABLE,
    payload: {
        teams,
        tableId
    }
})

export const teamHaveWin = (tableWithWin) => ({
    type: TEAMHAVEWIN,
    payload: {
        tableWithWin
    }
})