import axios from "axios"

import { createNewTeam, listAllTeams } from "./actions"

const BASEURL = 'https://api-to-services.herokuapp.com/teams'

export const createNewTeamThunk = (team) => (dispatch) => {
    axios.post(BASEURL, team)
        .then(({ data }) => {
            dispatch(createNewTeam(data))
        })
}

export const listTeams = () => (dispatch) => {
    axios.get(BASEURL)
        .then(({ data }) => {
            dispatch(listAllTeams(data))
        })
}