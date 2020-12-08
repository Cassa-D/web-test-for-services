import { useEffect, useState } from "react"

import { useParams, useHistory, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import TableTeams from "../../containers/table-teams"
import Dropdown from "../../components/dropdown"

import Modal from "../../components/modal"

import { addTeamToTable, listTables, modifyScore } from "../../redux/modules/tables/thunks"

const GameTable = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const id = Number(useParams().id)
    
    const table = useSelector((store) => store.tables[id - 1])
    const tableTeams = useSelector((store) =>
        store.tables.length >= id && store.tables[id - 1].teams)
    const teams = useSelector((store) => store.teams)
    
    const [show, setShow] = useState(false)

    const indexTeamWin = useSelector((store) =>
        store.tables.length >= id && store.tables[id - 1].team_win)

    const [showModalWin, setShowModalWin] = useState(false)
    
    useEffect(() => {
        dispatch(listTables())
    }, [dispatch, indexTeamWin])

    useEffect(() => {
        let hasWin = indexTeamWin < 0

        if (typeof indexTeamWin == "number")
            setShowModalWin(!hasWin)
    }, [table, indexTeamWin])
    
    const getTeamsInTable = () => {
        return teams.filter((team) => !tableTeams.find((tableTeam) => tableTeam.id === team.id))
    }

    const handleOnChangeScore = (value, teamId) => {
        if (indexTeamWin < 0) {
            dispatch(modifyScore(Number(value), teamId, table.id))
        }
    }

    try {
        return (
            <>
                <div>
                    <button onClick={() => history.push("/")}>{"< Voltar"}</button>
                </div>

                <h1>Essa é a tabela {table.name}!</h1>

                <div>
                    <h3>
                        Regras:
                    </h3>
                    <p>
                        {table.description}
                    </p>
                    <h4>Pontos necessários: <span>{table.table_score}</span></h4>
                </div>

                <div>
                    Esses são os times desta tabela:
                    <TableTeams
                        showScore
                        tableTeams={tableTeams}
                        onNewRow={() => indexTeamWin < 0 && table.teams.length < 10 && setShow(!show)}
                        buttonText={
                            <Dropdown show={show} title={"Adicionar time na tabela"}>
                                {getTeamsInTable()
                                    .map((team, i) => (
                                        <div className="chose" key={i} onClick={() => {
                                            dispatch(addTeamToTable(id, team.id))
                                        }}>
                                            {team.name}
                                        </div>
                                    ))}
                            </Dropdown>
                        }
                        onChangeScore={handleOnChangeScore}
                        max={indexTeamWin < 0 ? table.table_score : 0}
                    />
                </div>

                <Modal
                    show={showModalWin}
                    setShow={setShowModalWin}
                    title={(
                        <>
                            Time vitorioso: <span style={{ color:"green" }}>{indexTeamWin >= 0 && teams.find((team) => team.id === indexTeamWin).name}</span>!
                        </>
                    )}>
                </Modal>
            </>
        )
    }
    catch {
        return (
            <>
                Loading... Se demorar muito volte para a <Link to="/">home</Link>!
            </>
        )
    }

}

export default GameTable