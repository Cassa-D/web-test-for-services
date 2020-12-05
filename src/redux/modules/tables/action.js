import { CREATENEWTABLE } from "./types"

export const createNewTable = ({ table }) => ({
    type: CREATENEWTABLE,
    payload: {
        table
    }
})