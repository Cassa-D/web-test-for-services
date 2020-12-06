import { useState } from "react"

import { useParams, Redirect, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import TableTeams from "../../containers/table-teams"
import TeamsDropdown from "../../components/dropdown"

import { addNewTeamToTable } from "../../redux/modules/tables/actions"

const GameTable = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const id = Number(useParams().id) - 1
    const table = useSelector((store) => store.tables[id]) || {}
    const [teamsInTable, setTeamsInTable] = useState(table.teams)

    const teams = useSelector((store) => store.teams)

    const [show, setShow] = useState(false)

    if (!table.name) {
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
                    {table.description}
                </div>
            </div>

            <div>
                Esses são os times desta tabela:
                <TableTeams
                    showScore
                    tableTeams={teamsInTable}
                    tableIndex={id}
                    onNewRow={() => setShow(!show)}
                    buttonText={
                        <TeamsDropdown show={show}>
                            {teams
                                .filter((team) => !teamsInTable.find((tableTeam) => tableTeam.teamName === team.teamName))
                                .map((team, i) => (
                                    <div className="chose" key={i} onClick={() => {
                                        dispatch(addNewTeamToTable(team.teamName, id))
                                        setTeamsInTable([...teamsInTable, { teamName: team.teamName, points: 0 }])
                                    }}>{team.teamName}</div>
                                ))}
                        </TeamsDropdown>
                    }
                />
            </div>
        </>
    )
}

export default GameTable