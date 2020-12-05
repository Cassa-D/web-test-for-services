import { CREATENEWTABLE } from "./types"

const defaultState = [
    {name: "Table 1", award: "Carro", score: 10}
]

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATENEWTABLE:
            return [...state, action.payload.table]
        default:
            return state;
    }
}

export default reducer