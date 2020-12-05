import { useParams, Redirect, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import TableTeams from "../../containers/table-teams"

const GameTable = () => {
    const history = useHistory()
    const { id } = useParams()
    const table = useSelector((store) => store.tables[(Number(id) - 1)])

    if (table === undefined) {
        return <Redirect to="/"/>
    }

    return (
        <>
            <div>
                <span onClick={() => history.push("/")}>{"< Voltar"}</span>
            </div>

            <h1>Essa é a tabela {table.name}!</h1>

            <div>
                Regras:
                <div>
                    {table.descriptionForWin}
                </div>
            </div>

            <div>
                Esses são os times desta tabela:
                <TableTeams showScore tableTeams={table.teams} tableIndex={Number(id) - 1}/>
            </div>
        </>
    )
}

export default GameTable