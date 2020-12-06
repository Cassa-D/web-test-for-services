import { useState } from "react"
import { useDispatch } from "react-redux"

import TableList from "../../containers/table-list"
import TableTeams from "../../containers/table-teams"
import FormCreate from "../../components/form-create"

import { createNewTeam } from "../../redux/modules/teams/actions"

const Home = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})

    const inputs = [
        {
            type: "text",
            name: "teamName",
            placeholder: "Nome do time",
            validate: (value) => {
                setData({ ...data, teamName: value })
                if (!value) return "Por favor informe um nome para o novo time!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 5)"
            }
        },
        {
            type: "text",
            name: "player1",
            placeholder: "Nome do jogador 1",
            validate: (value) => {
                setData({ ...data, player1: value })
                if (!value) return "Por favor informe o nome do primeiro jogador!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 3)"
            }
        },
        {
            type: "text",
            name: "player2",
            placeholder: "Nome do jogador 2",
            validate: (value) => {
                setData({ ...data, player2: value })
                if (!value) return "Por favor informe o nome do segundo jogador!"
                if (value.length < 3)
                    return "Favor informar um nome adequado! (quantidade minima de caracteres: 3)"
            }
        }
    ]

    const onSubmitForm = (values) => {
        dispatch(createNewTeam(values))
        setData({})
        setShowModal(false)
    }

    return (
        <>
            <h1>Tabelas:</h1>
            <TableList />
            <h1>Times:</h1>
            <TableTeams onNewRow={() => setShowModal(true)} buttonText={"Criar novo time"}>
                <FormCreate
                    inputs={inputs}
                    data={{ data, setData }}
                    onSubmit={onSubmitForm}
                    show={{ showModal, setShowModal }}
                    title="Criar um novo Time!"
                />
            </TableTeams>
        </>
    )
}

export default Home