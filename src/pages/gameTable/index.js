import { useParams, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

import Table from "../../components/table"

const GameTable = () => {
    const { id } = useParams()
    const table = useSelector((store) => store.tables[(Number(id) - 1)])

    if (table === undefined) {
        return <Redirect to="/"/>
    }

    return (
        <>
            <h1>This is the {table.name}!</h1>

            <div>
                This is the teams in this table:
                {/* <Table /> */}
            </div>
        </>
    )
}

export default GameTable