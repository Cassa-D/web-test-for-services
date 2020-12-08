import { useState } from "react"
import { useDispatch } from "react-redux"

import TableList from "../../containers/table-list"
import TableTeams from "../../containers/table-teams"

import Modal from "../../components/modal"
import Form from "../../components/form"

import { createNewTeamThunk } from "../../redux/modules/teams/thunks"
import { createTable } from "../../redux/modules/tables/thunks"

import { tableInputs, teamInputs } from "./helper"

const Home = () => {
    const dispatch = useDispatch()
    const [showModalTeams, setShowModalTeams] = useState(false)
    const [showModalTables, setShowModalTables] = useState(false)

    const onSubmitFormTeams = (values) => {
        dispatch(createNewTeamThunk(values))
        setShowModalTeams(false)
    }

    const onSubmitFormTables = (values) => {
        dispatch(createTable({ ...values, table_score: Number(values.table_score) }))
        setShowModalTables(false)
    }

    return (
        <>
            <h1>Tabelas:</h1>
            <TableList onNewRow={() => setShowModalTables(true)} buttonText={"Criar nova tabela"}>
                <Modal show={showModalTables} setShow={setShowModalTables} title="Criar um nova Tabela!" >
                    <Form
                        inputs={tableInputs}
                        onSubmit={onSubmitFormTables}
                        show={{ showModalTables, setShowModalTables }}
                    />
                </Modal>
            </TableList>
            <h1>Times:</h1>
            <TableTeams onNewRow={() => setShowModalTeams(true)} buttonText={"Criar novo time"}>
                <Modal show={showModalTeams} setShow={setShowModalTeams} title="Criar um novo Time!" >
                    <Form
                        inputs={teamInputs}
                        onSubmit={onSubmitFormTeams}
                        show={{ showModalTeams, setShowModalTeams }}
                    />
                </Modal>
            </TableTeams>
        </>
    )
}

export default Home