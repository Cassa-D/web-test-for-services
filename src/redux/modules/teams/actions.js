import { CREATENEWTEAM } from "./types"

export const createNewTeam = (team) => ({
    type: CREATENEWTEAM,
    payload: {
        team
    }
})