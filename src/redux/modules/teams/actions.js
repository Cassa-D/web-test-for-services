import { CREATENEWTEAM, LISTALLTEAMS } from "./types"

export const createNewTeam = (team) => ({
    type: CREATENEWTEAM,
    payload: {
        team
    }
})

export const listAllTeams = (teams) => ({
    type: LISTALLTEAMS,
    payload: {
        teams
    }
})