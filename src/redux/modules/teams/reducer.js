import { CREATENEWTEAM } from "./types"

const defaultStatus = [
    {
        teamName: "Os topzera piá", player1: "João Cleber", player2: "Cresdineu Araujo"
    },
    {
        teamName: "Os grandes velhos", player1: "Januário José", player2: "Luiz Gonzaga"
    }
]

const reducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case CREATENEWTEAM:
            return [...state, action.payload.team]
        default:
            return state
    }
}

export default reducer