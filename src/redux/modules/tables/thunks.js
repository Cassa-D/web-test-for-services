import axios from "axios"
import { addNewTeamToTable, createNewTable, modifyScoreFromTeam, listAllTables, teamHaveWin } from "./actions"

const BASEURL = "https://api-to-services.herokuapp.com"

export const listTables = () => (dispatch) => {
    axios.get(`${BASEURL}/tables`)
        .then(({ data }) => {
            dispatch(listAllTables(data))
        })
}

export const createTable = (table) => (dispatch) => {
    axios.post(`${BASEURL}/tables`, table)
        .then(({ data }) => {
            dispatch(createNewTable(data))
        })
}

export const addTeamToTable = (tableId, teamId) => (dispatch) => {
    axios.post(`${BASEURL}/table/${tableId}`, { id: teamId })
        .then(({ data }) => {
            dispatch(addNewTeamToTable(data, tableId))
        })
}

export const modifyScore = (newScore, teamId, tableId) => (dispatch, getState) => {
    axios.put(`${BASEURL}/table/${tableId}/${teamId}`, { score: newScore })
        .then(({ data }) => {
            dispatch(modifyScoreFromTeam(data, teamId, tableId))

            const { tables } = getState()

            if (data[1] >= tables[tableId - 1].table_score && tables[tableId - 1].team_win < 0) {
                axios.get(`${BASEURL}/table/${tableId}/${teamId}`)
                    .then(({ data }) => {
                        dispatch(teamHaveWin(data))
                    })
            }
        })
}